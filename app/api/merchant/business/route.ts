import { NextResponse } from "next/server";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";

const clean=(value:unknown,max=160)=>String(value||"").trim().slice(0,max);
const optional=(value:unknown,max=160)=>clean(value,max)||null;

export async function POST(request:Request){
  try{
    const context=await getMerchantContext();
    if(!context)return NextResponse.json({error:"Sign in required."},{status:401});
    if(!context.subscription||!["active","trialing"].includes(context.subscription.status))return NextResponse.json({error:"An active subscription is required."},{status:403});
    const body=await request.json();
    const name=clean(body.name,120), phone=optional(body.phone,30), website=optional(body.website,300), supportEmail=optional(body.supportEmail,320);
    const timezone=clean(body.timezone,80)||"America/Chicago";
    const expiration=Number(body.defaultExpiration||30);
    const allowedExpiration=[15,30,60,120,1440].includes(expiration)?expiration:30;
    const addressLine1=clean(body.addressLine1,180), city=clean(body.city,100), state=clean(body.state,80), postalCode=clean(body.postalCode,20);
    if(name.length<2||addressLine1.length<3||city.length<2||state.length<2||postalCode.length<3)return NextResponse.json({error:"Complete the business name and primary-location address."},{status:400});
    await supabaseAdminRequest(`/rest/v1/organizations?id=eq.${context.organization.id}`,{method:"PATCH",headers:{Prefer:"return=minimal"},body:JSON.stringify({name,phone,website,support_email:supportEmail,timezone,default_request_expiration_minutes:allowedExpiration,onboarding_complete:true,status:"active",updated_at:new Date().toISOString()})});
    const existing=await supabaseAdminRequest<Array<{id:string}>>(`/rest/v1/organization_locations?organization_id=eq.${context.organization.id}&is_primary=eq.true&select=id&limit=1`);
    const location={organization_id:context.organization.id,name:clean(body.locationName,120)||"Main location",address_line1:addressLine1,address_line2:optional(body.addressLine2,180),city,state,postal_code:postalCode,country:"US",phone,timezone,is_primary:true,updated_at:new Date().toISOString()};
    if(existing[0])await supabaseAdminRequest(`/rest/v1/organization_locations?id=eq.${existing[0].id}`,{method:"PATCH",headers:{Prefer:"return=minimal"},body:JSON.stringify(location)});
    else await supabaseAdminRequest(`/rest/v1/organization_locations`,{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify(location)});
    return NextResponse.json({next:"/dashboard"});
  }catch(error){console.error("Business setup failed",error);return NextResponse.json({error:error instanceof Error?error.message:"Unable to save business setup."},{status:500});}
}

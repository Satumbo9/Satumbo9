import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const apiKey = process.env.PEXEL_KEY;
    
    if (!apiKey) { 
        return NextResponse.json({message: 'Missing Pexles API KEY'}, {status: 500})
    }

    const url = new URL(req.url);
    const query = url.searchParams.get('') || 'nature'
    const perPage = url.searchParams.get('per_page') || '10';
    
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`;



    try {
    const res = await fetch(pexelsUrl, {

        headers: {
            Authorization: apiKey,
        }
    })

    if (!res.ok)
    {
        throw new  Error('Something went wrong!')
    }
    
    const data = await res.json();
    return NextResponse.json(data)
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: 'Error to get data'},{status:500})
        
    }



}
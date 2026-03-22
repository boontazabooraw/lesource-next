import supabase from "@/lib/supabase";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    let query = supabase.from('Guides').select('*');

    if (search) {
        query = query.ilike("title", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
        return new Response(JSON.stringify(
            {
                error: error.message
            }),
            {
                status: 500,
                headers: { "Content-type": "application/json" },
            }
        )
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-type": "application/json" },
    });
}
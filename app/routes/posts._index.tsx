import { LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ()=> {
    // returnを一旦自分で定義
    return json(
        {
            posts: [
              {
                slug: "my-first-post",
                title: "My First Post",
              },
              {
                slug: "90s-mixtape",
                title: "A Mixtape I Made Just For You",
              },
            ],
          }
    )
}

export default function Posts(){
    const{ posts } = useLoaderData<typeof loader>();
    console.log({posts})
    return (
        <main>
            <ul>
                {
                    posts.map((post)=>(
                        <li key={post.slug} className="flex mx-auto">
                            <Link to = {post.slug} className="test-blue underline">
                                <p className="w-[400px] ">{post.title}</p>
                            </Link>
                        </li>
                    ))
                }
                
            </ul>
        </main>
    )
}
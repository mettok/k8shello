import React from 'react';
import axios from "axios";

const baseURL = "/hello";

export default function Hello() {
    const [post, setPost] = React.useState();

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    console.log(post);
    return (
        <div>

            <p>{post}</p>
        </div>
    );
}

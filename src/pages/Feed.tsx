import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
// import { feedSelector } from "redux/posts/selectors"
// import { feedRequest } from "redux/posts/thunks"

const Feed = () => {

    // const feed = useSelector(feedSelector)

    const dispatch = useDispatch();

    console.log(dispatch)

    useEffect(() => {
    //     // if(feed) return;
    //     dispatch(feedRequest())
    })

    return <div>
        <h1>Feed</h1>
        {/* {feed?.items.map((post: any) => <p>{post.caption}</p>)} */}
    </div>
}

export default Feed;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/features/postsSlice";

import './Posts.scss'

export default function Posts() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const deleteById = (id) => {
        dispatch(deletePost(id))
    }
    return (
        <div className="flex">
			{
				posts.map(elem => {
					return (
						<div className="flex-item" key={elem.id}>
							<h3 onClick={() => deleteById(elem.id)}>&#9747;</h3>
							<span>{elem.id}</span>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</div>
					)
				})
			}
		</div>
    )
}
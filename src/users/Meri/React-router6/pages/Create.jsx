import React from "react";

export default function Create() {
	return (
		<div>
			<h1>Create</h1>
			<div className="edit-form">
                <form>
                  <input type="text" placeholder="userId"/>
				  <input type="text" placeholder="id"/>
				  <input type="text" placeholder="title"/>
                  <textarea name="postbody" cols="30" rows="14" placeholder="body"></textarea>
                  <input type="submit" value='save post' />
                </form>
            </div>
		</div>
	)
}
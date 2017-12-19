import React, { Component } from 'react';

class PostCreator extends Component {
    render() {
        return (
            <form>
                <div>
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" id="title" maxLength="100" required="required"
                           aria-required="true" />
                </div>

                <div>
                    <label for="tags">Tags</label>
                    <input type="text" class="form-control" name="tags" id="tags" required="required"
                           aria-required="true" placeholder="Topics of your article, separated by &quot;,&quot;" />
                </div>

                <div>
                    <label for="img">Image</label>
                    <input type="file" name="img" id="img" class="form-control" />
                </div>

                <div>
                    <label for="content">Content</label>
                    <textarea placeholder="Type the body of your post here..." class="form-control" name="content"
                              rows="10" id="content" required="required" aria-required="true"></textarea>
                </div>
            </form>
        );
    }
}

export default PostCreator;
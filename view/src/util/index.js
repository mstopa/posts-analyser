async function createPost(post) {
    try {
      const res = await fetch('api/post/create', {
        method: 'POST',
        body: post,
      });
      return res;
    } catch (err) {
      return err;
    }
  }
  
  async function getPosts() {
    try {
      const res = await fetch(`api/posts`);
      return res.json();
    } catch (err) {
      return err;
    }
  }
  
  async function removePost(id) {
    try {
      const res = await fetch(`api/post/${id}`, {
        method: 'DELETE',
      });
      return res;
    } catch (err) {
      return err;
    }
  }
  
module.exports = { createPost, getPosts, removePost };
  
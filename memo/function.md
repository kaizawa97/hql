# ServiceName: HQL
## Mini Twitterを作ろう

### Functions:
- 投稿/検索/プロフィール/メッセージ(後日実装)
 
### Detail:
- 投稿 -> 文章/写真/コメント/Likes
- 検索 -> ユーザー/会社
- プロフィール -> 名前/役職/自己紹介
- ログイン -> Oauthでの実装を検討
- メッセージ -> ユーザー間 ユーザーと会社

### Detail for function:
- 投稿 -> 文章  -> 文章を投稿する (字数制限なし)
       -> 写真  -> 写真を投稿する (写真は圧縮する)
       -> コメント  -> コメントを投稿する (写真もあり)
       -> Likes  -> Likesを付ける 
- 検索 -> ユーザー -> 個人と会社をどちらも検索できるようにする
- プロフィール -> 氏名を登録
              -> 会社を登録 (会社・学校・部署を登録できるようにする) 
              -> 自己紹介を登録 (プロフィールURL/ヘッドライン/国)
- ログイン -> メールアドレス/パスワードでログインでも良いが出来ればOauthがよき
- メッセージ -> ユーザー間でメッセージを送る
            -> 会社とユーザー間でメッセージを送る

### API Structure:
- GET: /api/v1/users/
       /api/v1/users/:name
       /api/v1/users/company/:name
       /api/v1/posts
       /api/v1/posts/:post_id
       /api/v1/posts/:post_id/comments
       /api/v1/posts/:post_id/comments/:comment_id
       /api/v1/posts/:post_id/comments/:comment_id/replies
       /api/v1/posts/:post_id/comments/:comment_id/replies/:reply_id
       /api/v1/posts/:post_id/likes
       /api/v1/posts/:post_id/likes/:like_id
       /api/v1/posts/:post_id/likes/:like_id/liking_users
       /api/v1/search/:search_word
       /api/v1/profiles
       /api/vi/images/:image_id
       /api/vi/movies/:movie_id
      ~~/api/v1/profiles/:id/messages~~
      ~~/api/v1/profiles/:id/messages/:message_id~~
      + oauth系のAPIを叩く
       
- POST: /api/v1/users/
        /api/v1/users/:name/posts
        /api/v1/users/:name/posts/:post_id/comments
        /api/v1/users/:name/posts/:post_id/comments/:comment_id/replies
        /api/v1/users/:name/posts/:post_id/likes
        /api/v1/users/:name/posts/:post_id/likes/:like_id
        /api/v1/users/:name/profiles
        /api/vi/images
        /api/v1/movies
       ~~/api/v1/users/:name/profiles/:id/messages~~
       ~~/api/v1/users/:name/profiles/:id/messages/:message_id~~
       ~~/api/v1/users/:name/profiles/:id/messages/:message_id/replies~~
       ~~/api/v1/users/:name/profiles/:id/messages/:message_id/replies/:reply_id~~

- PUT: /api/v1/users/
       /api/v1/posts/:post_id/likes
       /api/v1/posts/:post_id/likes/:like_id
       /api/v1/posts/:post_id/comments/:comment_id
       /api/v1/posts/:post_id/comments/:comment_id/replies
       /api/v1/posts/:post_id/comments/:comment_id/replies/:reply_id
       /api/v1/users/:name/profiles

- DELETE: /api/v1/users/:user_id
          /api/v1/posts/:post_id
          /api/v1/posts/:post_id/comments/:comment_id
          /api/v1/posts/:post_id/comments/:comment_id/replies/:reply_id
          /api/v1/posts/:post_id/likes/:like_id
          
### API structure for function:
// profile router
router.get('/profile/:name(\\w+)', contoller.getProfile);
router.get('/profile/:name(\\w+)/posts', contoller.getAllPostsByName);
router.get('/profile/:name(\\w+)/posts/:id(\\d+)', contoller.getPostById);
router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments', contoller.getAllCommentsByPostId);
router.get('/profile/:name(\\w+)/posts/:id(\\d+)/comments/:id(\\d+)', contoller.getCommentById);
router.put('/profile/:name(\\w+)', contoller.updateProfile);
router.delete('/profile/:name(\\w+)', contoller.deleteProfile);

// user auth router
router.post('/auth/login', contoller.login);
router.post('/auth/register', contoller.register);

// users router
router.get('/users', contoller.getAllUsers);
router.get('/users/:name(\\w+)', contoller.getUserByName);

// search router
router.get('/search:search_word(\\w+)', contoller.search);

// posts router
router.get('/posts', contoller.getAllPosts);
router.get('/posts/:id(\\d+)', contoller.getPostById);
router.get('/posts/:id(\\d+)/comments', contoller.getAllCommentsByPostId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)', contoller.getCommentsByPostId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', contoller.getAllRepliesByCommentId);
router.get('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', contoller.getReplyByCommentId);
router.get('/posts/:id(\\d+)/likes',contoller.getAllLikesByPostId);
router.get('/posts/:id(\\d+)/likescount',contoller.getLikesCountByPostId);
router.post('/posts', contoller.createPost);
router.post('/posts/:id(\\d+)/comments', contoller.createComment);
router.post('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies', contoller.createReply);
router.post('/posts/:id(\\d+)/likes',contoller.createLike);
router.put('/posts/:id(\\d+)', contoller.updatePost);
router.delete('/posts/:id(\\d+)', contoller.deletePost);
router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)', contoller.deleteComment);
router.delete('/posts/:id(\\d+)/comments/:commentId(\\d+)/replies/:replyId(\\d+)', contoller.deleteReply);
router.delete('/posts/:id(\\d+)/likes/:likeId(\\d+)',contoller.deleteLike);

// images and movies router
router.get('/posts/:id(\\d+)/images:id(\\d+)', contoller.getImageById);
router.get('/posts/:id(\\d+)/movies:id(\\d+)', contoller.getMovieById);
router.post('posts/images', contoller.createImage);
router.post('posts/movies', contoller.createMovie);
router.put('posts/images/:id(\\d+)', contoller.updateImage);
router.put('posts/movies/:id(\\d+)', contoller.updateMovie);
router.delete('posts/images/:id(\\d+)', contoller.deleteImage);
router.delete('posts/movies/:id(\\d+)', contoller.deleteMovie);
### DB Structure:
- Users: user_id bigint autoincrement 
       name varchar 30文字まで
       age int 130歳まで
       email varchar [^\s]+@[^\s]+
       auth_flag bool true false
       company varchar 100文字まで
       https://gist.github.com/JesusMurF/9d206738aa54131a6e7ac88ab2d9084e sequelize -> password

- posts: id bigint autoincrement
       title text 
       body text
       photo varchar
       movie varchar
       like_count int
       
- comments: id bigint autoincrement
            like_count int
            body text
            reply text
- JSON雛形:
users:
{
    "username": "test",
    "full_name": "test taro",
    "age": "30",
    "email": "abc@abc.com",
    "password": "test",
    "company": "test",
    "country": "England",
    "auth_flag": "1"
}

posts:
{
    "user_id": "1",
    "title": "test",
    "text": "test",
    "image": "https://localhost:5000/public/test.jpg",
    "movie": "https://localhost:5000/public/abc.mp4"
}

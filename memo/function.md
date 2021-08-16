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
      ~~/api/v1/profiles/:id/messages~~
      ~~/api/v1/profiles/:id/messages/:message_id~~
      + oauth系のAPIを叩く
       
- POST: /api/v1/users/:name/posts
        /api/v1/users/:name/posts/:post_id/comments
        /api/v1/users/:name/posts/:post_id/comments/:comment_id/replies
        /api/v1/users/:name/posts/:post_id/likes
        /api/v1/users/:name/posts/:post_id/likes/:like_id
        /api/v1/users/:name/profiles
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

### DB Structure:
- user: user_id bigint autoincrement 
       name varchar 30文字まで
       age int 150歳まで
       email varchar [^\s]+@[^\s]+
       auth_flag bool true false
       company varchar 100文字まで

- posts: id bigint autoincrement
       user_id bigint autoincrement
       title text 
       body text
       created_at timestamp
       updated_at timestamp
       photo varchar
       movie varchar
       like_count int
       
- comments: id bigint autoincrement
            user_id bigint autoincrement
            post_id bigint autoincrement
            body text
            created_at timestamp
            updated_at timestamp
            reply text
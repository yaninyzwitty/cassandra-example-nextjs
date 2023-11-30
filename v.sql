CREATE TABLE IF NOT EXISTS comments ( 
  user_id     UUID, 
  comment_id  UUID,
  post_id     TIMEUUID,
  comment     TEXT, 

  PRIMARY KEY ((comment_id), post_id)
) WITH CLUSTERING ORDER BY (post_id DESC);

CREATE TABLE IF NOT EXISTS posts_by_room ( 
  room_id     TEXT, 
  post_id     TIMEUUID,
  user_id     UUID,
  text        TEXT,
  PRIMARY KEY ((room_id), post_id)
) WITH CLUSTERING ORDER BY (post_id DESC);
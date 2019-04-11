# Training Log API Server

## Todo

- db단 쿼리에서 페이지네이션을 구현해야 한다.

## Endpoints

`GET /blog`

- mongodb에서 blog 목록 데이터를 읽어옵니다.

`GET /blog/feed`

- Query paratmers

  - Filter by page, limit (default page=1, limit=25)
    `?page=1&limit=25`

- mongodb에서 blog 피드 데이터를 읽어옵니다.

`GET /youtube`

- mongodb에서 youtube 목록 데이터를 읽어옵니다.

`GET /youtube/feed`

- mongodb에서 youtube 피드 데이터를 읽어옵니다.

## Summary

![](https://res.cloudinary.com/yangeok/image/upload/v1554888938/11.jpg)

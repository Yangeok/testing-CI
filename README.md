# Training Log Back-end API Server

## Todo

- 해외, 국내로 리스트를 4개로 만들기
- 포스트에서 작성자 페이지 링크도 만들기
- 리스트 정렬쿼리를 작성하기
- 유튜브는 영상 썸네일도 같이 보내기
- 블로거 썸네일 이미지 같이 보내기
- 리스트에 sns링크 추가하기
- 피드 last updated 추가해서 보내기
- opml 불러와서 보내기
- 타입스크립트 리팩토링

## Endpoints

`GET /blog/<pageNumber>/<pageLimit>`

- mongodb에서 blog 목록 데이터를 읽어옵니다.

`GET /blog/feed/<pageNumber>/<pageLimit>`

- mongodb에서 blog 피드 데이터를 읽어옵니다.

`GET /youtube/<pageNumber>/<pageLimit>`

- mongodb에서 youtube 목록 데이터를 읽어옵니다.

`GET /youtube/feed/<pageNumber>/<pageLimit>`

- mongodb에서 youtube 피드 데이터를 읽어옵니다.

## Summary

[![](https://res.cloudinary.com/yangeok/image/upload/v1554888938/training-log/11.jpg)](https://res.cloudinary.com/yangeok/image/upload/v1554888938/training-log/11.jpg){: target="\_blank" }

[![](https://res.cloudinary.com/yangeok/image/upload/v1558403801/portfolio/screencapture-training-front-netlify-2019-05-21-10_54_21.png)](https://res.cloudinary.com/yangeok/image/upload/v1558403801/portfolio/screencapture-training-front-netlify-2019-05-21-10_54_21.png){: target="\_blank" }

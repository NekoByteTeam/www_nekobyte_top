---
layout: home
pageClass: home-page  # 新增唯一标识

hero:
  name: 'NekoByte'
  tagline: NekoByte 团队官网
  image:
    src: /logo.png
    alt: NekoByte
  actions:
    - theme: brand
      text: 查看说明
      link: /start

---

<style>
  /* 限定作用域 */
  .home-page {
    /* 垂直居中 */
    .VPLayout, .VPContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* 增加hero区域的上边距 */
    .VPHero {
      margin-top: 4rem;
      padding-top: 4rem;
    }

    /* 让LOGO稍微缩小点 */
    .VPHero .image img {
      max-height: 600px;
    }

    /* Features */
    .VPFeatures {
      margin-top: 3rem;
      padding-top: 3rem;
      margin-bottom: 2rem; 
    }
  }
</style>

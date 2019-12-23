import { ajaxGet, ajaxDelete } from './ajax'

export default class ArticleApi {
  fetchArticles = (params) => {
    // console.log(params)
    return (
      ajaxGet(`/articles.json?${params}`)
        .then(response => response.json())
    )
  }

  destroyArticle = (id) => {
    return (
      ajaxDelete(`/articles/${id}`)
        .then(response => response.json())
    )
  }
}

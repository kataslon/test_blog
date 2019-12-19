import { ajaxPost } from './ajax'

export default class ArticleApi {
  destroyArticle = (id) => {
    return (
      ajaxDelete(`/articles/${id}`)
      .then(response => response.json())
    )
  }
}

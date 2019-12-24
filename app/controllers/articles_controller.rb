class ArticlesController < ApplicationController
  def index
    @articles = ArticlesQuery.new(filter_params).run
    respond_to do |format|
      format.html { render component: 'ArticlesContainer', props: { articles: @articles }, prerender: false }
      format.json { render json: { articles: @articles } }
    end
  end


  def destroy
    article = Article.find_by(id: params[:id])
    article.destroy
    ActionCable.server.broadcast('ArticlesChannel', { articleId: params[:id].to_i } )
    render json: { result: 'success' }
  end

  private

  def filter_params
    params.permit(:id, :name, :text, :type, :sort_param, :group_param)
  end
end

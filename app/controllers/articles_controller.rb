class ArticlesController < ApplicationController
  def index
    @articles = ArticlesQuery.new(filter_params).run
    render component: 'ArticlesContainer', props: { articles: @articles }, prerender: false
  end


  def destroy
    article = Article.find_by(id: params[:id])
    article.destroy
    # ArticlesChannel.broadcast_to('ArticlesChannel', { articles: ArticlesQuery.new(params['filter_params'] || {}).run } )
    ActionCable.server.broadcast('ArticlesChannel', { articles: ArticlesQuery.new(params['filter_params'] || {}).run } )
    render json: { result: 'success' }
  end

  private

  def filter_params
    params.permit(:id, :name, :text, :type, :sort_param, :group_param)
  end
  end
end

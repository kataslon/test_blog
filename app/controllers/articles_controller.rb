class ArticlesController < ApplicationController
  def index
    @articles = ArticlesQuery.new(filter_params).run
    render component: 'Articles', props: { articles: @articles }
  end

  private

  def filter_params
    params.permit(:name, :text, :type, :sort_param, :group_param)
  end
end

class ArticlesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'ArticlesChannel'
  end
end

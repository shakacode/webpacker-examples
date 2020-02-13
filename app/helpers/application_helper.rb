# frozen_string_literal: true

module ApplicationHelper

  def title(sub_title)
    content_for(:title) { sub_title }
  end

  def description(description)
    content_for(:meta_description) { description }
  end
end

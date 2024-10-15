from django.urls import path

from .views import ProductDetailView, ListProductsView, ListSearchView, ListRelatedView, ListBySearchView

app_name="product"
urlpatterns = [
    path('product/<slug:slug>', ProductDetailView.as_view()),
    path('get-products', ListProductsView.as_view()),
    path('search', ListSearchView.as_view()),
    path('related/<slug:slug>', ListRelatedView.as_view()),
    path('by/search', ListBySearchView.as_view()),
]
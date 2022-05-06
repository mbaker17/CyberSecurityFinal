from django.conf.urls import url
from securityApp import views

urlpatterns=[
    url(r'^category/$', views.CategoryApi),
    url(r'^category/([0-9]+)$', views.CategoryApi),
    url(r'^type/$', views.TypeApi),
    url(r'^type/([0-9]+)$', views.TypeApi),
    url(r'^tool/$', views.ToolApi),
    url(r'^tool/([0-9]+)$', views.ToolApi),
    url(r'^command/$', views.CommandApi),
    url(r'^command/([0-9]+)$', views.CommandApi)
]
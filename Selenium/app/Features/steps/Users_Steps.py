from View.View_SpaceStation import *
from View.View_Users import *
import time
from behave import given, when, then, step


@given(u'Users. Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    context.space_station = SpaceStation(context.driver)
    context.users = Users(context.driver)

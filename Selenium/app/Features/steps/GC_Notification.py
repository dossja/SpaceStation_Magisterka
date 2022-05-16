from View.View_SpaceStation import *
import time
from behave import given, when, then, step


@given(u'Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    time.sleep(10)
    context.space_station = SpaceStation(context.driver)

from View.View_SpaceStation import *
from View.View_Missions import *
import time
from behave import given, when, then, step


@given(u'Missions. Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    context.space_station = SpaceStation(context.driver)
    context.missions = Missions(context.driver)


@then(u'Clicks missions')
def step_impl(context):
    context.missions.click_missions()


@then(u'Clicks show missions')
def step_impl(context):
    context.missions.click_showMissions()


@then(u'Clicks add missions')
def step_impl(context):
    context.missions.click_addMissions()

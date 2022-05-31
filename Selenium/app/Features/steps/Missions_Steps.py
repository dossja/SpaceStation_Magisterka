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


@then(u'Clicks show crew: {id}')
def step_impl(context, id):
    context.missions.click_showCrew(id)


@then(u'Clicks edit crew: {id}')
def step_impl(context, id):
    context.missions.click_editCrew(id)


@then(u'Clicks add mission')
def step_impl(context):
    context.missions.click_addMission()


@then(u'Clicks mission crew: "{crew}"')
def step_impl(context, crew):
    print(crew)
    context.missions.tick_missionCrew(crew)


@then(u'Clicks modify mission')
def step_impl(context):
    context.missions.click_modifyMission()

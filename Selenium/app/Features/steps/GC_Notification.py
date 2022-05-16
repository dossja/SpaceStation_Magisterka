from View.View_SpaceStation import *
import time
from behave import given, when, then, step


@given(u'Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    context.space_station = SpaceStation(context.driver)


@then(u'Insert email: {email}')
def step_impl(context, email):
    context.space_station.insert_email(email)


@then(u'Insert password: {password}')
def step_impl(context, password):
    context.space_station.insert_password(password)


@then(u'Clicks signin')
def step_impl(context):
    context.space_station.click_signIn()


@then(u'Clicks reports')
def step_impl(context):
    context.space_station.click_reports()


@then(u'Clicks show reports')
def step_impl(context):
    context.space_station.click_showReports()


@then(u'Clicks assign: {id}')
def step_impl(context, id):
    context.space_station.click_assignReports(id)


@then(u'Clicks dropdown')
def step_impl(context):
    context.space_station.click_assignDropdown()


@then(u'Clicks user: {id}')
def step_impl(context, id):
    context.space_station.click_dropdownUser(id)


@then(u'wait: {sec}')
def step_impl(context, sec):
    time.sleep(int(sec))

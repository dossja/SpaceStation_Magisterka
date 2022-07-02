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


@then(u'wait: {sec}')
def step_impl(context, sec):
    time.sleep(int(sec))


@then(u'write results: "{feature}" "{scenario}"')
def step_impl(context, feature, scenario):
    context.space_station.save_results(
        feature, scenario, context.config.userdata["filename"])


@then(u'reset timer')
def step_impl(context):
    context.space_station.reset_timer()

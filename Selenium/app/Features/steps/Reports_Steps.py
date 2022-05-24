from View.View_SpaceStation import *
from View.View_Reports import *
import time
from behave import given, when, then, step


@given(u'Reports. Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    context.space_station = SpaceStation(context.driver)
    context.reports = Reports(context.driver)


@then(u'Clicks reports')
def step_impl(context):
    context.reports.click_reports()


@then(u'Clicks show reports')
def step_impl(context):
    context.reports.click_showReports()


@then(u'Clicks assign: {id}')
def step_impl(context, id):
    context.reports.click_assignReports(id)


@then(u'Clicks dropdown')
def step_impl(context):
    context.reports.click_assignDropdown()


@then(u'Clicks user: {id}')
def step_impl(context, id):
    context.reports.click_dropdownUser(id)


@then(u'Clicks assign user')
def step_impl(context):
    context.reports.click_assignUser()


@then(u'Clicks add reports')
def step_impl(context):
    context.reports.click_addReports()


@then(u'Insert report: "{title}" "{description}" {type}')
def step_impl(context, title, description, type):
    context.reports.insertReportData(title, description, type)


@then(u'Clicks add report')
def step_impl(context):
    context.reports.click_addReport()


@then(u'Clicks finish: {id}')
def step_impl(context, id):
    context.reports.click_finishReports(id)


@then(u'Clicks cancel: {id}')
def step_impl(context, id):
    context.reports.click_cancelReports(id)


@then(u'Checks btn text: {id} "{value}"')
def step_impl(context, id, value):
    context.reports.checks_btnText(id, value)


@then(u'Checks label text: {id} "{value}"')
def step_impl(context, id, value):
    context.reports.checks_labelText(id, value)

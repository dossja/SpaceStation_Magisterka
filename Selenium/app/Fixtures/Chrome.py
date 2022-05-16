from behave import fixture
from selenium import webdriver


@fixture
def chrome(context, timeout=5, **kwargs):
    context.driver = webdriver.Chrome(
        "C:\Program Files (x86)\chromedriver.exe"
    )

    yield context.driver
    context.driver.close()

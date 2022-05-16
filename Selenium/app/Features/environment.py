import re
from behave import use_fixture
from Fixtures.Chrome import chrome


def before_feature(context, feature):
    if "skip" in feature.tags:
        feature.skip("Marked with @skip")
        return


def before_scenario(context, scenario):
    if "skip" in scenario.effective_tags:
        scenario.skip("Marked with @skip")
        return


def before_tag(context, tag):
    if tag == "fixture.chrome":
        use_fixture(chrome, context)

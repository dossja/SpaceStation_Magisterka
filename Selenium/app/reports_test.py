from time import sleep
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By


def test_reports_btn(driver):
    reports_btn = driver.find_element(
        By.XPATH, """//*[@id="root"]/div/header/div/div/button[1]""")
    reports_btn.click()


def test_show_reports(driver):
    show_reports_btn = driver.find_element(
        By.XPATH, """//*[@id="root"]/div/header/div/div/div[3]/div/div/button[2]/span[1]/a""")
    show_reports_btn.click()


def test_assign_reports(driver):
    assign_reports_btn = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, """//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[1]/td[7]/button[1]/span[1]""")))
    assign_reports_btn.click()
    users_dropdown = driver.find_element(By.XPATH, """//*[@id="select"]""")
    users_dropdown.click()
    user_dd_option = driver.find_element(
        By.XPATH, """//*[@id="menu-"]/div[3]/ul/li[2]""")
    user_dd_option.click()
    assign_user_btn = driver.find_element(
        By.XPATH, """/html/body/div[2]/div[3]/div/div/div[2]/button/span[1]""")
    assign_user_btn.click()
    sleep(5)

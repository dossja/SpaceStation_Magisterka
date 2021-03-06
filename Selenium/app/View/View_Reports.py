from lib2to3.pgen2 import driver
from logging import setLogRecordFactory
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


class Reports:
    driver = None
    """

    """

    reports_btn_xpath = '//*[@id="reportsLink"]'
    showReports_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/button[2]/span[1]/a'
    assignUser_btn_xpath = '/html/body/div[2]/div[3]/div/div/div[2]/button/span[1]'
    addReports_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/button[1]/span[1]/a'
    title_field_xpath = '//input[contains(@id, "title")]'
    description_field_xpath = '//textarea[contains(@id, "description")]'
    addReport_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div/div[2]/button'

    def __init__(self, driver) -> None:
        self.driver = driver

    def click_reports(self):
        self.reports_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.reports_btn_xpath)))
        self.reports_btn.click()

    def click_showReports(self):
        self.showReports_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.showReports_btn_xpath)))
        self.showReports_btn.click()

    def click_assignReports(self, id):
        self.assignReports_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[7]/button[1]/span[1]'
        self.assignReports_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.assignReports_btn_xpath)))
        self.assignReports_btn.click()

    def click_assignDropdown(self):
        self.assign_dropdown_xpath = '//div[contains(@id, "selectUser")]'
        self.assign_dropdown = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.assign_dropdown_xpath)))
        self.assign_dropdown.click()

    def click_dropdownUser(self, id):
        self.dropdownUser_btn_xpath = '//*[@id="' + id + '"]'
        self.dropdownUser_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.dropdownUser_btn_xpath)))
        self.dropdownUser_btn.click()
        WebDriverWait(self.driver, 20).until(
            EC.invisibility_of_element_located((By.XPATH, '//*[@id="1"]')))

    def click_assignUser(self):
        self.assignUser_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.assignUser_btn_xpath)))
        self.assignUser_btn.click()
        WebDriverWait(self.driver, 20).until(
            EC.invisibility_of_element_located((By.XPATH, self.assignUser_btn_xpath)))

    def click_addReports(self):
        self.addReports_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addReports_btn_xpath)))
        self.addReports_btn.click()

    def insertReportData(self, title, description, type):
        self.title_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.title_field_xpath)))
        self.title_field.send_keys(title)
        self.description_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.description_field_xpath)))
        self.description_field.send_keys(description)
        self.reportType_dropdown_xpath = '//div[contains(@id, "select")]'
        self.reportType_dropdown = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.reportType_dropdown_xpath)))
        self.reportType_dropdown.click()
        self.dropdownReportType_btn_xpath = '//*[@id="' + type + '"]'
        self.dropdownReportType_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.dropdownReportType_btn_xpath)))
        self.dropdownReportType_btn.click()

    def click_addReport(self):
        self.addReport_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.addReport_btn_xpath)))
        self.addReport_btn.click()

    def click_finishReports(self, id):
        self.finishReports_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[7]/button[1]/span[1]'
        self.finishReports_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.finishReports_btn_xpath)))
        self.finishReports_btn.click()

    def click_cancelReports(self, id):
        self.cancelReports_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[7]/button[2]/span[1]'
        self.cancelReports_btn = WebDriverWait(self.driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, self.cancelReports_btn_xpath)))
        self.cancelReports_btn.click()

    def checks_btnText(self, id, value):
        try:
            self.text_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
                id + ']/td[7]/button[1]/span[1]'
            self.text_btn = WebDriverWait(self.driver, 20).until(
                EC.visibility_of_element_located((By.XPATH, self.text_btn_xpath)))
            print(value)
            print(self.text_btn.text)
            assert self.text_btn.text == value
        except:
            self.text_btn_xpath = '//*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
                id + ']/td[7]/button[1]/span[1]'
            self.text_btn = WebDriverWait(self.driver, 20).until(
                EC.visibility_of_element_located((By.XPATH, self.text_btn_xpath)))
            print(value)
            print(self.text_btn.text)
            assert self.text_btn.text == value

    def checks_labelText(self, id, value):
        self.text_label_xpath = ' //*[@id="root"]/div/header/div/div/div[3]/div/div/div[2]/div[2]/table/tbody/tr[' + \
            id + ']/td[7]/p'
        self.text_label = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.text_label_xpath)))

        assert self.text_label.text == value

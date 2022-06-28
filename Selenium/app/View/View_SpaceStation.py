from lib2to3.pgen2 import driver
from logging import setLogRecordFactory
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time


class SpaceStation:
    driver = None
    start_time = time.time()
    """

    """

    email_field_xpath = '//input[contains(@id, "email")]'
    password_field_xpath = '//input[contains(@id, "password")]'
    signIn_btn_xpath = '//*[@id="root"]/div/header/div/div/div/div[2]/button'

    def __init__(self, driver) -> None:
        self.driver = driver
        self.email_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.email_field_xpath)))

    def insert_email(self, value):
        self.email_field.send_keys(value)

    def insert_password(self, value):
        self.password_field = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.password_field_xpath)))
        self.password_field.send_keys(value)

    def click_signIn(self):
        self.signIn_btn = WebDriverWait(self.driver, 20).until(
            EC.visibility_of_element_located((By.XPATH, self.signIn_btn_xpath)))
        self.signIn_btn.click()

    def save_results(self, feature, scenario, filename):
        import openpyxl
        import os

        end_time = time.time()

        date = time.strftime("%Y-%m-%d", time.gmtime())

        path = f"{filename}_{feature}_{date}.xlsx"

        book = openpyxl.Workbook()
        if os.path.isfile(path):
            book = openpyxl.load_workbook(path)

        # book = xlwt.Workbook(encoding="utf-8")
        sheet_time = time.strftime("%H.%M.%S", time.gmtime())
        sheet = book.create_sheet(f"{scenario}_{sheet_time}")

        if book.get_sheet_names()[0] == "Sheet":
            sheet_to_del = book.get_sheet_by_name('Sheet')
            book.remove_sheet(sheet_to_del)

        diff = end_time - self.start_time
        sheet.append(["StartTime", "EndTime", "Difference"])
        sheet.append([self.start_time, end_time, diff])

        # sheet1.write(0, 0, "StartTime")
        # sheet1.write(1, 0, self.start_time)
        # sheet1.write(0, 1, "EndTime")
        # sheet1.write(1, 1, end_time)
        # sheet1.write(0, 2, "Difference")
        # sheet1.write(1, 2, diff)

        book.save(f"{filename}_{feature}_{date}.xlsx")

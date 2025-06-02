# test_codequest.py
import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

class TestCodequest:
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_codequest(self):
        driver = self.driver
        actions = ActionChains(driver)

        driver.get("http://localhost:5173/")
        time.sleep(1)

        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(1)

        driver.find_element(By.CSS_SELECTOR, ".see-more").click()
        time.sleep(1)

        input_nome = driver.find_element(By.CSS_SELECTOR, "input")
        input_nome.click()
        time.sleep(0.5)
        input_nome.send_keys("teste")
        time.sleep(0.8)

        driver.find_element(By.CSS_SELECTOR, "button:nth-child(8) > img").click()
        time.sleep(1)

        driver.find_element(By.CSS_SELECTOR, "button:nth-child(3)").click()
        time.sleep(1)

        driver.find_element(By.CSS_SELECTOR, "button:nth-child(1)").click()
        time.sleep(1)

        # Pergunta 1
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(2) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 2
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(3) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 3
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(5)").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(1) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 4
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(4) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 5
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(2) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 6
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(3) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 7
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(1) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 8
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(1) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 9
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        actions.move_to_element(driver.find_element(By.CSS_SELECTOR, "button")).perform()
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(2)").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Pergunta 10
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, ".option:nth-child(2) > p").click()
        time.sleep(0.6)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Final
        driver.find_element(By.CSS_SELECTOR, "button").click()
        time.sleep(0.8)
        driver.find_element(By.CSS_SELECTOR, "button:nth-child(2)").click()
        time.sleep(1)

        # Ranking
        ranking = driver.find_element(By.CSS_SELECTOR, ".ranking-list")
        actions.move_to_element(ranking).click_and_hold().perform()
        time.sleep(1)
        actions.move_to_element(ranking).release().perform()
        time.sleep(1)

        driver.find_element(By.CSS_SELECTOR, "button:nth-child(3)").click()
        time.sleep(1)

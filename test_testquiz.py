# test_testquiz.py (Versão Definitiva - Busca por Texto Visível)
import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestTestquiz():
    def setup_method(self, method):
        self.driver = webdriver.Firefox()
        self.wait = WebDriverWait(self.driver, 20)
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_fluxo_com_busca_por_texto(self):
        """
        Versão final que localiza o botão pelo seu texto visível "Iniciar",
        a abordagem mais robusta para aplicações React.
        """
        try:
            # --- Etapa 0: Abrir a página ---
            self.driver.get("http://localhost:5173/")
            self.driver.maximize_window()
            print("Página do quiz aberta.")

            # --- Etapa 1: Encontrar e Clicar no Botão "Iniciar" ---
            # Esta é a mudança crucial. Usamos XPath para encontrar um <button>
            # que contenha exatamente o texto "Iniciar".
            print("A aguardar pelo botão com o texto 'Iniciar'...")
            
            iniciar_button = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[text()='Iniciar']"))
            )
            print("Botão 'Iniciar' encontrado e clicável!")
            
            # Usar o clique com JS é um bom seguro contra qualquer problema.
            self.driver.execute_script("arguments[0].click();", iniciar_button)
            print("Etapa 1: Clicou no botão 'Iniciar'.")

            # Pausa para a próxima animação de ecrã
            time.sleep(2)

            # --- O FLUXO CONTINUA AQUI ---
            # Agora que passámos da primeira etapa, pode adicionar o resto do seu teste.
            # Lembre-se de usar seletores robustos para os próximos passos também.
            print("Sucesso! A primeira etapa foi concluída.")
            print("Pode agora adicionar as próximas etapas do teste aqui.")


        except Exception as e:
            print(f"\n--- OCORREU UM ERRO! ---\nTipo: {type(e).__name__}\nMensagem: {e}")
            screenshot_path = "screenshot_erro_final.png"
            self.driver.save_screenshot(screenshot_path)
            print(f"\nScreenshot do erro salva em: '{screenshot_path}'")
            pytest.fail("O teste falhou. Verifique o log e a screenshot.")


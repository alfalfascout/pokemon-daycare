from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from itertools import product
import re
import time

l = [False, True]
combinations = list(product(l, repeat=18))
clist = 0

ErrorCount = 1
cprint = 1

#chromedriver.exe in \pokemon-daycare\Atomation\chromedriver.exe
driverpath = ''
site1 = 'http://alfalfascout.github.io/pokemon-daycare/'
site2 = 'https://mkwrs.com/destiny_knot/'

driver = webdriver.Chrome(driverpath)
driver.maximize_window()
driver.get(site1)

cdriver = webdriver.Chrome(driverpath)
cdriver.maximize_window()
cdriver.get(site2)

select = Select(driver.find_element("name", "held-item"))
select.select_by_value('destiny-knot')

#Daycare IV locations
p1IV = ['/html/body/div/div[2]/div[1]/p[2]/label[1]', '/html/body/div/div[2]/div[1]/p[2]/label[2]', 
        '/html/body/div/div[2]/div[1]/p[2]/label[3]', '/html/body/div/div[2]/div[1]/p[2]/label[4]', 
        '/html/body/div/div[2]/div[1]/p[2]/label[5]', '/html/body/div/div[2]/div[1]/p[2]/label[6]'] 

p2IV = ['/html/body/div/div[2]/div[2]/p/label[1]', '/html/body/div/div[2]/div[2]/p/label[2]', 
        '/html/body/div/div[2]/div[2]/p/label[3]', '/html/body/div/div[2]/div[2]/p/label[4]', 
        '/html/body/div/div[2]/div[2]/p/label[5]', '/html/body/div/div[2]/div[2]/p/label[6]'] 

desiredIV = ['/html/body/div/div[3]/span/label[1]', '/html/body/div/div[3]/span/label[2]',
            '/html/body/div/div[3]/span/label[3]', '/html/body/div/div[3]/span/label[4]', 
            '/html/body/div/div[3]/span/label[5]', '/html/body/div/div[3]/span/label[6]']

#Compare site IV locations
p1IV2 = ['/html/body/form/table[1]/tbody/tr[2]/td[2]/input', '/html/body/form/table[1]/tbody/tr[2]/td[3]/input', 
         '/html/body/form/table[1]/tbody/tr[2]/td[4]/input', '/html/body/form/table[1]/tbody/tr[2]/td[5]/input', 
         '/html/body/form/table[1]/tbody/tr[2]/td[6]/input', '/html/body/form/table[1]/tbody/tr[2]/td[7]/input']

p2IV2 = ['/html/body/form/table[1]/tbody/tr[3]/td[2]/input', '/html/body/form/table[1]/tbody/tr[3]/td[3]/input', 
         '/html/body/form/table[1]/tbody/tr[3]/td[4]/input', '/html/body/form/table[1]/tbody/tr[3]/td[5]/input', 
         '/html/body/form/table[1]/tbody/tr[3]/td[6]/input', '/html/body/form/table[1]/tbody/tr[3]/td[7]/input']

desiredIV2 = ['/html/body/form/table[1]/tbody/tr[4]/td[2]/input', '/html/body/form/table[1]/tbody/tr[4]/td[3]/input', 
         '/html/body/form/table[1]/tbody/tr[4]/td[4]/input', '/html/body/form/table[1]/tbody/tr[4]/td[5]/input', 
         '/html/body/form/table[1]/tbody/tr[4]/td[6]/input', '/html/body/form/table[1]/tbody/tr[4]/td[7]/input']

while True:
  p1 = combinations[clist][0:6]
  p2 = combinations[clist][6:12]
  desired = combinations[clist][12:18]

  #Used to see if combination is impossible. If it is, then skip
  tcount = 0
  count = 0
  while count < 6:
    if p1[count] == True or p2[count] == True:
      if desired[count] == True:
        tcount+=1
    count+=1

  if tcount < desired.count(True) - 1:
    clist+=1
    continue

  count = 0
  for x in desired:
    if x == True:
      if p1[count] == True or p2[count] == True:
        break
    count+=1

  if count == 6:
    clist+=1
    continue

  #rgba(101, 149, 78, 1) is True color

  count = 0
  for x in p1:
    element = driver.find_element(By.XPATH, p1IV[count])
    element2 = cdriver.find_element(By.XPATH, p1IV2[count])
    if x == True:
      
      if element.value_of_css_property('background-color') != 'rgba(101, 149, 78, 1)':
        element.click()
      if not element2.is_selected():
        element2.click()

    else:
      if element.value_of_css_property('background-color') == 'rgba(101, 149, 78, 1)':
        element.click()
      if element2.is_selected():
        element2.click()
      
    count+=1

  count = 0
  for x in p2:
    element = driver.find_element(By.XPATH, p2IV[count])
    element2 = cdriver.find_element(By.XPATH, p2IV2[count])
    
    if x == True:
      
      if element.value_of_css_property('background-color') != 'rgba(101, 149, 78, 1)':
        element.click()
      if not element2.is_selected():
        element2.click()

    else:
      if element.value_of_css_property('background-color') == 'rgba(101, 149, 78, 1)':
        element.click()
      if element2.is_selected():
        element2.click()
    count+=1

  count = 0
  for x in desired:
    element = driver.find_element(By.XPATH, desiredIV[count])
    element2 = cdriver.find_element(By.XPATH, desiredIV2[count])
    
    if x == True:
      if element.value_of_css_property('background-color') != 'rgba(101, 149, 78, 1)':
        element.click()
      if not element2.is_selected():
        element2.click()

    else:
      if element.value_of_css_property('background-color') == 'rgba(101, 149, 78, 1)':
        element.click()
      if element2.is_selected():
        element2.click()
    
    count+=1

  driver.find_element("name", "goal-calculate").click()
  time.sleep(1)
  percentage = driver.find_element(By.XPATH, "/html/body/div/div[4]/p[1]/b").text
  percentage = re.findall("\d+\.\d+|\d+", percentage)
  percentage_1 = float(percentage[0])
  print(percentage_1)

  cdriver.find_element(By.XPATH, '/html/body/form/input').click()
  time.sleep(1)
  percentage = cdriver.find_element(By.XPATH, "/html/body/div/b[1]").text
  percentage = re.findall("\d+\.\d+|\d+", percentage)
  percentage_2 = float(percentage[0])
  print(percentage_2)

  if percentage_1 != percentage_2 or percentage_1 == 0 or percentage_2 == 0:
    with open(r'C:\Users\Noah\Desktop\pokemon-daycare\Automation\log.txt', 'a') as f:
      f.write('ERROR ' + str(ErrorCount) + 
      ":\nParent 1 IV's: " + str(p1) + 
      "\nParent 2 IV's: " + str(p2) + 
      "\nDesired IV's: " + str(desired) + 
      "\nPercentage for Daycare: " + str(percentage_1) + " Percentage for other site: " + str(percentage_2) + "\n\n")
      ErrorCount+=1

  print('Test ' + str(cprint) + ' complete')
  cprint+=1
  clist+=1

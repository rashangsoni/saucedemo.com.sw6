package com.saucedemo.sw6.sw6;


import com.cucumber.listener.Reporter;
import com.saucedemo.sw6.sw6.browserfactory.ManageBrowser;
import com.saucedemo.sw6.sw6.propertyreader.PropertyReader;
import com.saucedemo.sw6.sw6.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends Utility {
    @Before
    public void setUp()
    {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

    @After
    public void tearDown(Scenario scenario) {
        if(scenario.isFailed())
        {
            String screenshotPath;
            screenshotPath = getScreenshot(ManageBrowser.driver,scenario.getName().replace("","_"));
            try
            {
                Reporter.addScreenCaptureFromPath(screenshotPath);
            }
            catch (IOException e)
            {
                throw new RuntimeException(e);
            }
        }
        closeBrowser();
    }
}

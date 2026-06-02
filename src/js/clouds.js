/**
 * Created 2025
 * Peter Brumbach
 * 
 * Adds moving clouds in the background to appear at random times
 */

import cloud1 from "../assets/images/PW/clouds/cloud1.png";
import cloud2 from "../assets/images/PW/clouds/cloud2.png";
import cloud3 from "../assets/images/PW/clouds/cloud3.png";

async function cloudsMain() {
    // Makes the default cloud template
    await makeDefault();

    // Starts spawning cloud clones
    startCloudInterval(15000, 0.4)
}

let defaultCloud = null;
async function makeDefault() {
    defaultCloud = new Image();
    defaultCloud.style.position = 'fixed';
    defaultCloud.style.zIndex = '-1';
    defaultCloud.style.width = (window.innerWidth/10).toString()+'px';
    defaultCloud.style.transform = 'translate('+(-1*window.innerWidth/10).toString()+'px)';
}

async function startCloudInterval(milliSeconds, speed) {
    setInterval(() => {
        let newCloud = defaultCloud.cloneNode(true);
        let newCloudPos = -1*window.innerWidth/10;
        newCloud.style.top = (Math.random()*20+5).toString()+'%';
        const spawnChance = Math.random();
        if (spawnChance < 0.3) {
            newCloud.src = cloud1;
        } else if (spawnChance < 0.6) {
            newCloud.src = cloud2;
        } else {
            newCloud.src = cloud3;
        }
        document.body.appendChild(newCloud);
        let newInterval = setInterval(()=> {
            newCloudPos += speed;
            newCloud.style.transform = 'translate('+(newCloudPos).toString()+'px)';
            newCloud.style.width = (window.innerWidth/10).toString()+'px';
            if (window.innerWidth < newCloudPos) {
                document.body.removeChild(newCloud);
                clearInterval(newInterval);
            }
        }, 10);

    }, milliSeconds);
}

export default cloudsMain;
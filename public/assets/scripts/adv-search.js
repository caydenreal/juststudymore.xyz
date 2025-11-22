let currentMode = "all";

const htmlString = `            <a class='link button' target="_blank" href='https://dsc.gg/gnetwork' data-tag="exclusive"><img height="175"
                                                src="/assets/images/app/dsc.jpg"
                                                onerror="this.src='/assets/img/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">[Gᾰme Suggestions] .gg/SJA6Hx8gep</span></a>
                                <a class='link button' target="_blank" href='https://dsc.gg/gnetwork' data-tag="exclusive"><img
                                                height="175" src="/assets/images/app/dsc.jpg"
                                                onerror="this.src='/assets/img/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">[Bug Reporting] .gg/SJA6Hx8gep</span></a>
                                <a class='link button' href='/yalp/ela.html?book=1&type=3kh0'><img height="175"
                                                src="https://cdn.statically.io/gh/GalacticNetwork/3kh0-assets/main/1/meta/apple-touch-icon.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1">1</span></a>
                                <a class='link button' href='/yalp/ela.html?book=10-minutes-till-dawn&type=3kh0'><img
                                                height="175"
                                                src="https://cdn.statically.io/gh/GalacticNetwork/3kh0-assets/main/10-minutes-till-dawn/splash.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="10 Minutes Till Dawn">10 Minutes Till Dawn</span></a>
                                <a class='link button' href='/yalp/ela.html?book=2048&type=3kh0'><img height="175"
                                                src="/assets/images/game/2048.png" class="image" width="175"><span
                                                class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="2048">2048</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://prod-web-pool.miniclip.com/mc?localmc'><img height="175"
                                                src="/assets/images/game/8ball.jpeg" class="image" width="175"><span
                                                class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="2048">8 Ball Classic</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://db.quackprep.org/html/99_nights_in_the_forest/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/99nights.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">99 Nights In The Forest</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://raw.githack.com/gameazzetz/assets/refs/heads/main/1v1lolold.html'><img
                                                height="175" src="/assets/images/game/1v1lolold.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1v1.lol">1v1.lol Oldest Version</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://learn-with.jskjsv6.workers.dev/1v1-lol-online/1v1-lol-online.github.io/main/file/index.html'><img
                                                height="175" src="/assets/images/game/1v1-lol.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1v1.lol">1v1.lol Older Version</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://1v1.lol'><img
                                                height="175" src="/assets/images/game/1v1lol.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1v1.lol">1v1.lol New</span></a>
                                <a class='link button' href='/yalp/banana.html?book=1on1soccer.swf&type=swf'><img
                                                height="175" src="/assets/images/game/1-on-1-soccer.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1 on 1 soccer">1 on 1 Soccer</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwDQPy94m3iDQqxeBLkyAH8rWoNeunk0TyuS7j5qE6hSk3o3j6eoU7z5uy_qhgsKeKn/exec'><img
                                                height="175" src="/assets/images/game/1o1football.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 football">1 on 1 football</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwDVKSBVuNK4axJUnLuqHJHWh7EubO4icUJldVaUPoVqjsalm2SB9mCKg7x6f0rU7O6OA/exec'><img
                                                height="175" src="/assets/images/game/1on1.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">1 on 1 Basketball</span></a>
                                <a class='link button' href='/yalp/ela.html?book=12-minibattles&type=local'><img
                                                height="175" src="/assets/images/game/12-minibattles.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="12 Minibattles">12 Minibattles</span></a>
                                <a class='link button' href='/yalp/ela.html?book=4th-and-goal/2022&type=local'><img
                                                height="175" src="/assets/images/game/4andgoal2022.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="4th and goal 2022">4th and goal 2022</span></a>
                                <a class='link button' href='/yalp/ela.html?book=60-sec/burger&type=local'><img
                                                height="175" src="/assets/images/game/burger.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="60 bg">60 sec burger run</span></a>
                                <a class='link button' href='/yalp/ela.html?book=60-sec/santa&type=local'><img
                                                height="175" src="/assets/images/game/santa.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="60 santa">60 sec santa run</span></a>
                                <a class='link button' href='/yalp/ela.html?book=a-small-world-cup&type=local'><img
                                                height="175" src="/assets/images/game/asmallworldcup.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                class="some" alt="A Dance Of Fire And Ice">A Small World
                                                Cup</span></a>
                                <a class='link button' href='/yalp/ela.html?book=awesome-tanks&type=local'><img
                                                height="175" src="/assets/images/game/atank.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="awesome">Awesome Tanks</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://than1089.github.io/adventure-capitalist'><img height="175"
                                                src="/assets/images/game/adventure.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="adventure opalist">Adventure Opalist</span></a>
                                <a class='link button' href='/yalp/ela.html?book=a-dance-of-fire-and-ice&type=3kh0'><img
                                                height="175" src="/assets/images/game/adofi.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                class="some" alt="A Dance Of Fire And Ice">A Dance of Fire
                                                and Ice</span></a>
                                <a class='link button' href='/yalp/ela.html?book=alien-hominid&type=local'><img
                                                height="175" src="/assets/images/game/alien-hominid.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Alien Hominid">Alien Hominid</span></a>
                                <a class='link button'
                                        href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwAoMJxFkkCGbz6H0x2lq5uVhb1vvQRKraex1znydX5Gm0jWse3HWUTvdU34ghoPqQauQ/exec'><img
                                                height="175" src="/assets/images/game/amazing-strange.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;width:max-content;"
                                                alt="Amazing Strange Rope Police">Amazing Stange
                                                Police</span></a>
                                <a class='link button' href='/yalp/ela.html?book=among-us&type=local'><img height="175"
                                                src="/assets/images/game/among-us.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Among Us">Among Us</span></a>
                                <a class='link button' href='/yalp/ela.html?book=angry-birds&type=local'><img
                                                height="175" src="/assets/images/game/angry-birds.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Angry Birds">Angry Birds</span></a>
                                <a class='link button' href='/yalp/banana.html?book=adarkroom&type=local'><img
                                                height="175" src="/assets/images/game/a-dark-room.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="A Dark Room">A Dark Room</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbzQinbUFpM6_ZM3lSnGIvfg3iRSHGUFPWlOpWyYKQUBnyZG5CNiqOKTQk2KT7FlUcVQ/exec'><img
                                                height="175" src="/assets/images/game/acid-bunny.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="acid bunny">Acid Bunny</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxZxa8auKOAZ6E-osfQUDvxugnvgKCuHycGkLTvG6KY-fuozPz_0hdgWOtwmJHfrpUB/exec'><img
                                                height="175" src="/assets/images/game/axis-football.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Axis Football League">Axis Football League</span></a>
                                <a class='link button' href='/yalp/ela.html?book=achievementunlocked&type=3kh0'><img
                                                height="175" src="/assets/images/game/achievementunlocked.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Achievement Unlocked</span></a>
                                <a class='link button' href='/yalp/ela.html?book=adv-unlcked&type=local'><img
                                                height="175" src="/assets/images/game/acunlocked2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="achvunl">Achievement Unlocked 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=angry-sharks&type=3kh0'><img
                                                height="175" src="/assets/images/game/angry-sharks.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Angry Sharks</span></a>
                                <a class='link button' href='/yalp/ela.html?book=aquapark-slides&type=3kh0'><img
                                                height="175" src="/assets/images/game/aquapark-slides.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Aquapark Slides</span></a>
                                <a class='link button' href='/yalp/banana.html?book=astray&type=local'><img height="175"
                                                src="/assets/images/game/astray.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Astray</span></a>
                                <a class='link button' href='/yalp/ela.html?book=arcane&type=local'><img height="175"
                                                src="/assets/images/game/arcane.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Angry Birds">Arcane</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://f.kbhgames.com/emujs/play.php?c=gba&f=ace-attorney.gba'><img
                                                height="175" src="/assets/images/game/aceatt.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Ace Attorney</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/andys-apple-farm/index.html'><img
                                                height="175" src="/assets/images/game/aaf.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Andy's Apple Farm</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/amanda-the-adventurer/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ata.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Amanda The Adventurer</span></a>
                                <a class='link button' href='/sppa/src/aptoide' data-tag="exclusive"><img height="175"
                                                src="/assets/images/app/aptoide.png" onerror="this.src='/assets/img/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="aptoide">Aptoide</span></a>
                                <a class='link button' href='/sppa/src/android-emulator' data-tag="exclusive"><img height="175"
                                                src="/assets/images/app/emulator.png" onerror="this.src='/assets/img/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:190px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="android">Android VM</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/bendy/index.html'><img height="175"
                                                src="/assets/images/game/batim.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Bendy And The Ink  Machine</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://badparentingame.io/play/bad-parenting/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/badparents.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Bad Parenting</span></a>
                                <a class='link button' href='/yalp/ela.html?book=backrooms&type=3kh0'><img height="175"
                                                src="https://cdn.statically.io/gh/GalacticNetwork/3kh0-assets/main/backrooms/img/splash.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="backrooms">Backrooms</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bad-piggies&type=local'><img
                                                height="175" src="/assets/images/game/bad-piggies.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bad piggies">Bad Piggies</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://jcw87.github.io/c2-sans-fight/'><img
                                                height="175" src="/assets/images/game/bad-time-sim.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bad time simulator">Bad Time Simulator</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bacon-may-die&type=3kh0'><img
                                                height="175" src="/assets/images/game/bacon-may-die.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bacon May Die">Bacon May Die</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bad-ice-cream&type=3kh0'><img
                                                height="175" src="/assets/images/game/bad-ice-cream.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bad ice cream">Bad Ice Cream</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bad-ice-cream&type=3kh0'><img
                                                height="175" src="/assets/images/game/bad-ice-cream-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bad ice cream 2">Bad Ice Cream 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bad-ice-cream&type=3kh0'><img
                                                height="175" src="/assets/images/game/bad-ice-cream-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bad ice cream 3">Bad Ice Cream 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=baldi&type=local'><img height="175"
                                                src="/assets/images/game/baldi.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Baldi's Basics">Baldi's Basics</span></a>
                                <a class='link button' href='/yalp/ela.html?book=baldi/camping&type=local'><img
                                                height="175" src="/assets/images/game/baldicamping.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="baldi's basics camping">Baldi's Basics Camping</span></a>
                                <a class='link button' href='/yalp/ela.html?book=basketball-stars&type=local'><img
                                                height="175"
                                                src="/assets/images/game/basketball-stars.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="basketball stars">Basketball Stars</span></a>
                                <a class='link button' href='/yalp/ela.html?book=basketball-legends&type=local'><img
                                                height="175" src="/assets/images/game/basketball-legends.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="basketball legends">Basketball Legends</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxUfaDSpH-0SJL0WPKt38JY7OOOGMmtpY9JTSbL8pvtjxS7jSpNHHu6MdZgWUshIU00Kw/exec'><img
                                                height="175" src="/assets/images/game/basketbros-io.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="basketbros.io">BasketBros.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=binding-issac&type=local'><img
                                                height="175" src="/assets/images/game/binding-of-issac.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="binding of issac">Binding of Issac; Wrath of the Lamb</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bitlife&type=local'><img height="175"
                                                src="/assets/images/game/btlf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bitlife">Bitlife</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://d1tm91r4ytbt54.cloudfront.net/d4a7c4c9-d0f9-46b2-b550-8db05b19c224/1681780644339/bloxdio/index.html'><img height="175"
                                                src="/assets/images/game/bloxd-io.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bloxd.io">Bloxd.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bob-the-robber&type=local'><img
                                                height="175" src="/assets/images/game/btr.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bob the robber">Bob The Robber</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bob-the-robber/2&type=local'><img
                                                height="175" src="/assets/images/game/btr2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bob The Robber 2">Bob The Robber 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://bitlifeonline.github.io/bob-the-robber-3'><img
                                                height="175" src="/assets/images/game/btr3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bob The Robber 3">Bob The Robber 3</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://webglmath.github.io/bob-the-robber-4'><img
                                                height="175" src="/assets/images/game/btr4.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bob The Robber 4">Bob The Robber 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bob-the-robber/5&type=local'><img
                                                height="175" src="/assets/images/game/btr5.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Bob the robber 5">Bob The Robber 5</span></a>
                                <a class='link button' href='https://www.easyfun.gg/embed/brawl-stars.html?start=1'><img
                                                height="175" src="/assets/images/game/brawl-stars-game.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="brawl stars">Brawl Stars</span></a>
                                <a class='link button' href='/yalp/ela.html?book=burrito-bison&type=local'><img
                                                height="175" src="/assets/images/game/burrito-bison.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="burrito bison">Burrito Bison</span></a>
                                <a class='link button' href='/yalp/ela.html?book=burrito-bison/revenge&type=local'><img
                                                height="175" src="/assets/images/game/burito-bison-revenge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="brawl stars">Burrito Bison Revenge</span></a>
                                <a class='link button' href='/yalp/ela.html?book=buckshot-roulette&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/buckshot.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="buckshot roulette">Buckshot Roulette</span></a>
                                <a class='link button' href='/yalp/ela.html?book=boxhead2play&type=3kh0'><img
                                                height="175" src="/assets/images/game/boxhead2play.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="bh2p">BoxHead2Play</span></a>
                                <a class='link button' href='/yalp/ela.html?book=blockpost&type=3kh0'><img height="175"
                                                src="/assets/images/game/blockpost.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">BlockPost</span></a>
                                <a class='link button' href='/yalp/ela.html?book=banjo-kazooie&type=local'><img
                                                height="175" src="/assets/images/game/banjo.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="BK">Banjo Kazooie</span></a>
                                <a class='link button' href='/yalp/banana.html?book=bloonstd1.swf&type=swf'><img
                                                height="175" src="/assets/images/game/bloonstd.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="btd">Bloons TD</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bloonstd2&type=3kh0'><img height="175"
                                                src="/assets/images/game/bloonstd2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="btd2">Bloons TD 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=btd3&type=local'><img height="175"
                                                src="/assets/images/game/btd3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="btd3">Bloons TD 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=btd4&type=local'><img height="175"
                                                src="/assets/images/game/btd4.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="btd4">Bloons TD 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=btd5&type=3kh0'><img height="175"
                                                src="/assets/images/game/btd5.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="btd5">Bloons TD 5</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bloxors&type=3kh0'><img height="175"
                                                src="/assets/images/game/block.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="bloxors">Bloxors</span></a>
                                <a class='link button' href='/yalp/ela.html?book=basket-random&type=3kh0'><img
                                                height="175" src="/assets/images/game/basket.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="BR">Basket Random</span></a>
                                <a class='link button' href='/yalp/ela.html?book=boxing-random&type=3kh0'><img
                                                height="175" src="/assets/images/game/boxing.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="boxing random">Boxing Random</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bigredbutton&type=3kh0'><img
                                                height="175" src="/assets/images/game/bigredbutton.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Big Red Button</span></a>
                                <a class='link button' href='/yalp/ela.html?book=blacholesquare&type=3kh0'><img
                                                height="175" src="/assets/images/game/blackholesquare.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Black Hole Square</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://games.cdn.famobi.com/html5games/b/basket-and-ball/v100/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=c424d62a-3c54-4b9d-825b-33d94fb282e4&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=122&original_ref=https%3A%2F%2Fwww.google.com%2F'><img
                                                height="175" src="/assets/images/game/basketnball.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Basket And Ball</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ball-dodge&type=local'><img
                                                height="175" src="/assets/images/game/ball-dodge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="eaglercraft 1.3.3">Ball Dodge</span></a>
                                <a class='link button' href='/yalp/ela.html?book=my-nutsacks&type=local'><img
                                                height="175" src="/assets/images/game/myballznbricks.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SMC">Balls And Bricks</span></a>
                                <a class='link button' href='/yalp/ela.html?book=blade-ball&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/blade-ball.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SMC">Blade Ball</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://sz-games.github.io/Games6/burger-and-frights'><img
                                                height="175" src="/assets/images/game/bnf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Burger and Frights</span></a>
                                <a class='link button' href='/yalp/ela.html?book=btts&type=local'><img height="175"
                                                src="/assets/images/game/btts.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="BR">Big Town Tiny Square</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://rebemanae.github.io/big-tower-tiny-square-2/'><img height="175"
                                                src="/assets/images/game/btts2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="BR">Big Town Tiny Square 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=block-blast&type=local'><img
                                                height="175" src="/assets/images/game/block-blast.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Block Blast</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/baldi-plus/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bp.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Baldi Plus</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://edu.aptutorfinder.com/assets/storage/html/bouncemasters' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bounce.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Bouncemasters</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bloodmoney&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bloodmoney.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Bloodmoney</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/bubbls/youtube-playables/refs/heads/main/bowmasters/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bms.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Bowmasters</span></a>
                                <a class='link button' href='/yalp/ela.html?book=bergentruck&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bg201x.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Bergentruck 201X</span></a>
                                <a class='link button' href='/yalp/ela.html?book=blackjack&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/bj.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">24/7 Blackjack</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://ext.minijuegosgratis.com/the-baby-in-yellow-horror-game/index.html?mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=241712&mp_game_uid=the-baby-in-yellow-horror-game&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fgame%2Fthe-baby-in-yellow-horror-game&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=America%2FLos_Angeles&mp_view_type=' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/biy.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Baby in Yellow</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://crazy-cattle3d.org/game/crazycattle3d/'><img
                                                height="175" src="/assets/images/game/cc3d.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Crazy Cattle 3D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=cooking-mama&type=local'><img
                                                height="175" src="/assets/images/game/cooking-mama.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Cooking Mama</span></a>
                                <a class='link button' href='/yalp/ela.html?book=cannon-basketball&type=local'><img
                                                height="175" src="/assets/images/game/cb.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cannon basketball">Cannon Basketball</span></a>
                                <a class='link button' href='/yalp/ela.html?book=cannon-basketball/2&type=local'><img
                                                height="175" src="/assets/images/game/cb2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cannon basketball 2">Cannon Basketball 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=cannon-basketball-4&type=3kh0'><img
                                                height="175" src="/assets/images/game/cannon-4.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Cannon Basketball 4</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbx9UUe8pbCE69R_ihMqgQ4DIORj802vgm7hDBilwsDlrzbPJcN9UzatjkK3fnj1TSrm/exec'><img height="175"
                                                src="/assets/images/game/cars-io.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cars.io">Cars.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=castel-wars-modern&type=local'><img
                                                height="175" src="/assets/images/game/castel-wars-modern.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="castel wars modern">Castel Wars Modern</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://tiwb.github.io/catmario/'><img height="175"
                                                src="/assets/images/game/cat-mario.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cat mario">Cat Mario</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxiYJVxz4HPt3JTbXtgX7swXZ734vV_Wr4QcqmQrBMydobF0wIOH_eqQx9HFVCkH4cX/exec'><img
                                                height="175" src="/assets/images/game/clicker-heroes.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="clicker heroes">Clicker Heroes</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/a/macros/ingeniumstudent.org/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec'><img
                                                height="175" src="/assets/images/game/cluster-rush.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cluster rush">Cluster Rush</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ctr&type=local'><img height="175"
                                                src="/assets/images/game/ctr.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Cut The Rope">Cut The Rope</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxc2Ixx0J4KbQFfgy3j_fniI1pXxuUUkr8tO1Dq9UODOVhI3LhRpv1mCPUja-p5CmM-/exec'><img height="175"
                                                src="/assets/images/game/ctrtt.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cut the rope: time travel">Cut the Rope: Time</span></a>
                                <a class='link button' href='/yalp/ela.html?book=csgo&type=local'><img height="175"
                                                src="/assets/images/game/bhop.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="cs:go: bhop">CSGO: BHOP</span></a>
                                <a class='link button' href='/yalp/ela.html?book=craftmine&type=local'><img height="175"
                                                src="/assets/images/game/craftmine.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="craftmine">CraftMine</span></a>
                                <a class='link button' href='/yalp/ela.html?book=core-ball&type=local'><img height="175"
                                                src="/assets/images/game/core-ball.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="core ball">Core Ball</span></a>
                                <a class='link button' href='/yalp/banana.html?book=cookieclicker&type=local'><img
                                                height="175" src="/assets/images/game/cookie-clicker.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Cookie Clicker</span></a>
                                <a class='link button' href='/yalp/banana.html?book=chromaincident&type=local'><img
                                                height="175" src="/assets/images/game/chroma.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Chroma Incident</span></a>
                                <a class='link button' href='/yalp/ela.html?book=crossyroad&type=3kh0'><img height="175"
                                                src="/assets/images/game/crossyroad.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Crossy Road</span></a>
                                <a class='link button' href='/yalp/src/cod'><img height="175"
                                                src="/assets/images/game/call-of-duty.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Call Of Duty</span></a>
                                <a class='link button' href='/yalp/src/cookie-run' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/cookie-run.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="dad n me">Cookie Run Kingdom</span></a>
                                <a class='link button' href='/yalp/ela.html?book=candy-crush&type=local'><img
                                                height="175" src="/assets/images/game/candy-crush.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="dad n me">Candy Crush</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://www.1001games.com/action/crazy-plane-landing'><img
                                                height="175" src="/assets/images/game/crazy-crash-landing.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Crazy Crash Landing</span></a>
                                <a class='link button' href='/yalp/ela.html?book=crazy-cars&type=local'><img
                                                height="175" src="/assets/images/game/cc.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Crazy Cars</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ccok3d&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/c3d.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Crazy Chicken 3D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=counter-strike&type=local'><img
                                                height="175" src="/assets/images/game/hfcs.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Counter Strike 1.6</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://truffled.lol/extra/co09loader/C09/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/co09.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Class Of 09</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://truffled.lol/extra/co09loader/C09RU/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/09-reup.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Class Of 09; The Re-Up</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://truffled.lol/extra/co09loader/C09FS/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/09flipside.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Class Of 09; The Flipside</span></a>
                                <a class='link button' href='/yalp/ela.html?book=class-of-09&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/co09demo.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Class Of 09 (DEMO)</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://maddymakesgamesinc.itch.io/celesteclassic' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/celeste.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Celeste Classic</span></a>
                                <a class='link button' href='/yalp/ela.html?book=celeste/2&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/celeste2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Celeste 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=chess&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/chess.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">24/7 Chess</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/web-ports/cuphead/refs/heads/main/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/cuphead.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Cuphead</span></a>
                                <a class='link button'  href='/yalp/ela.html?book=cov&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/cov.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Clash of Vikings</span></a>
                                <a class='link button' href='/yalp/ela.html?book=dad-n-me&type=local'><img height="175"
                                                src="/assets/images/game/dad-n-me.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="dad n me">Dad N Me</span></a>
                                <a class='link button' href='/yalp/ela.html?book=dbz-kart&type=local'><img height="175"
                                                src="/assets/images/game/dbz-kart.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="dragonballz kart">DragonBallZ Kart</span></a>
                                <a class='link button' href='/yalp/ela.html?book=deepest-sword&type=local'><img
                                                height="175" src="/assets/images/game/deepest-sword.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="deepest sword">Deepest sword</span></a>
                                <a class='link button' href='/yalp/ela.html?book=dk-country&type=local'><img
                                                height="175" src="/assets/images/game/donkey-country.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="donkey kong country">Donkey Kong Country</span></a>
                                <a class='link button' href='/yalp/ela.html?book=doom&type=local'><img height="175"
                                                src="/assets/images/game/Doom_cover_art.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="doom">Doom</span></a>
                                <a class='link button' href='/yalp/ela.html?book=drift-hunters&type=3kh0'><img
                                                height="175" src="/assets/images/game/drift-hunters.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="drift hunters">Drift Hunters</span></a>
                                <a class='link button' href='/yalp/ela.html?book=drift-boss&type=local'><img
                                                height="175" src="/assets/images/game/drift-boss.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="drift boss">Drift Boss</span></a>
                                <a class='link button' href='/yalp/ela.html?book=duck-hunt&type=local'><img height="175"
                                                src="/assets/images/game/duck-hunt.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:noewrap"
                                                alt="duck hunt">Duck Hunt</span></a>
                                <a class='link button' href='/yalp/banana.html?book=ducklife.swf&type=swf'><img
                                                height="175" src="/assets/images/game/dl1.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="duck life 1">Duck Life 1</span></a>
                                <a class='link button' href='/yalp/banana.html?book=ducklife2.swf&type=swf'><img
                                                height="175" src="/assets/images/game/ducklife2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="duck life 2">Duck Life 2</span></a>
                                <a class='link button' href='/yalp/banana.html?book=ducklife3.swf&type=swf'><img
                                                height="175" src="/assets/images/game/duck3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="duck life 3">Duck Life 3</span></a>
                                <a class='link button' href='/yalp/banana.html?book=ducklife4.swf&type=swf'><img
                                                height="175" src="/assets/images/game/duck4.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="duck life 4">Duck Life 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=duck-life-five&type=local'><img
                                                height="175" src="/assets/images/game/duck-life-5.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="duck life 5">Duck Life 5</span></a>
                                <a class='link button' href='/yalp/ela.html?book=death-run-3d&type=3kh0'><img
                                                height="175" src="/assets/images/game/death.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Death Run 3D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=doge2048&type=3kh0'><img height="175"
                                                src="/assets/images/game/doge.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Doge2048</span></a>
                                <a class='link button' href='/yalp/ela.html?book=doodle-jump&type=3kh0'><img
                                                height="175" src="/assets/images/game/doodle.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Doodle Jump</span></a>
                                <a class='link button' href='/yalp/ela.html?book=draw-the-hill&type=3kh0'><img
                                                height="175" src="/assets/images/game/draw-the-hill.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Draw The Hill</span></a>
                                <a class='link button' href='/yalp/ela.html?book=duke-nukem-2&type=3kh0'><img
                                                height="175" src="/assets/images/game/duke.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Duke Nukem 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/GalacticNetwork/3kh0-assets/main/dumbwaystodie/dumbwaystodie.html'><img height="175"
                                                src="/assets/images/game/dwtd.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Dumb Ways To Die</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://main.dd8vt524eqsk2.amplifyapp.com/projects/defend-the-tank/index.html'><img height="175"
                                                src="/assets/images/game/dtt.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Defend the Tank</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://stickmanboost.com/drunken-boxing-2.embed'><img height="175"
                                                src="/assets/images/game/db2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Drunken Boxing 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=drive-mad&type=3kh0'><img height="175"
                                                src="/assets/images/game/drive-mad.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Drive Mad</span></a>
                                <a class='link button'  href='/yalp/ela.html?book=deltarune&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/deltarune.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Deltarune</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/google-class/d0cbe7c43047eb95d3c1455877387d540128e98e/dokidoki/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ddlc.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Doki Doki Literature Club</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/dead-plate/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/deadplate.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Dead Plate</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/deadseat/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/deadseat.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Deadseat</span></a>
                                <a class='link button' href='/yalp/ela.html?book=deltatraveler&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/dtl.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Deltatraveler</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://dudetheftauto.io/embed/dude-theft-auto' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/dta.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Dude Theft Auto</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://rbeesley.github.io/MicrosoftEdge-SURF/'><img height="175"
                                                src="/assets/images/game/edge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Edge Surf</span></a>
                                <a class='link button' href='/yalp/ela.html?book=escapingtheprison&type=3kh0'><img
                                                height="175" src="/assets/images/game/escapingtheprison.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Escaping The Prison</span></a>
                                <a class='link button' href='/yalp/banana.html?book=evilglitch&type=local'><img
                                                height="175" src="/assets/images/game/evil.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Evil Glitch</span></a>
                                <a class='link button' href='/yalp/banana.html?book=edgenotfound&type=local'><img
                                                height="175" src="/assets/images/game/edge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Edge Not Found</span></a>
                                <a class='link button' href='/yalp/ela.html?book=eaglercraft/menu&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/splash.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="eaglercraft 1.8.8">[Eaglercraft] Minecraft Versions</span></a>
                                
                                <a class='link button' href='/active/index.html?autofill=https://webglmath.github.io/eggy-car/'><img height="175"
                                                src="/assets/images/game/eggy-car.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Eggy Car">Eggy Car</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://ubg365.github.io/elastic-man/play.html'><img
                                                height="175" src="/assets/images/game/elastic.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Elastic Man">Elastic Man</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://edu.aptutorfinder.com/assets/storage/webgl/eattherich/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/etr.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Eat The Rich</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://bit.ly/4mGWUhJ' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/f.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="fortnite">Fortnite</span></a>
                                <a class='link button' href='/yalp/src/fortnite-mobile' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/f.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="fortnite">Fortnite Mobile</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://www.silvergames.com/en/fortzone-battle-royale/gameframe' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/fortzone.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tetris">FortZone</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fpa&type=local'><img height="175"
                                                src="/assets/images/game/fancy-pants.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="Fancy Pants Adventure">Fancy Pants</span></a>
                                <a class='link button' href='/yalp/ela.html?book=doom&type=local'><img height="175"
                                                src="/assets/images/game/fancy-pants-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="Fancy Pants Adventure 2">Fancy Pants Adventure 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fbwg&type=local'><img height="175"
                                                src="/assets/images/game/fire-water-1.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl">Fire Boy Water Girl</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fbwg/2&type=local'><img height="175"
                                                src="/assets/images/game/fire-water-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl 2">Fire Boy Water Girl 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fbwg/3&type=local'><img height="175"
                                                src="/assets/images/game/fire-water-3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl 3">Fire Boy Water Girl 3</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://slope-game.github.io/fireboy-water-4/'><img height="175"
                                                src="/assets/images/game/fire-water-4.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl 4">Fire Boy Water Girl 4</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbyJNOLNn5Ls2FUk3P-yVVB0pztdV0Ln-9Y63pMkV8_EehcgTlZ79f4xnOWRW2OgVlmn/exec'><img height="175"
                                                src="/assets/images/game/fire-water-5.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl 5">Fire Boy Water Girl 5</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwYTN-M6FpARuAcCZUAcosjE2KlpUlBaK0ckikqh8A8RdlLTTNuSwk-NSFF6Vq4-D2opA/exec'><img height="175"
                                                src="/assets/images/game/fire-water-6.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Fire Boy and Water Girl 6">Fire Boy Water Girl 6</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaw&type=local'><img height="175"
                                                src="/assets/images/game/Long_arms.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Five Nights At Winstons">Five Nights at Winston</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/index.html&type=local'><img height="175"
                                                src="/assets/images/game/fnaf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Five Nights At Freddy's">Five Nights At Freddy's</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/2&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's Two">Five Nights At Freddy's 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/3&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;flex-wrap: wrap;overflow: visible;"
                                                alt="Five Nights At Freddy's 3">Five Nights At Freddy's 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/4&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-4.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's 4">Five Nights At Freddy's 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/sl&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-sl.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's">Five Nights At freddy
                                                SL</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/world&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/fnafworld.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Five Nights At Freddy's WORLD</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/fp&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-final-pug.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Five Nights At Freddy's Final Pugatory">FNAF Final
                                                Pugatory</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/hw&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-hw.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's HW">FNAF Help Wanted</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/pizza&type=local'><img
                                                height="175" src="/assets/images/game/pizza.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's">FNAF Pizza Simulator</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/ucn&type=local'><img height="175"
                                                src="/assets/images/game/fnaf-ucn.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's">FNAF UCN</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnaf/jrs&type=local'><img height="175"
                                                src="/assets/images/game/jr's.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;overflow: visible;"
                                                alt="Five Nights At Freddy's">FNAF JR's</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/fnf.gif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="friday night funkin">Friday Night Funkin [OLD]</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://uploads.ungrounded.net/alternate/1528000/1528775_alternate_113347_r119.zip/?NewgroundsAPI_PublisherID=1&NewgroundsAPI_SandboxID=668c534c39440&NewgroundsAPI_SessionID=&NewgroundsAPI_UserName=%26lt%3Bdeleted%26gt%3B&NewgroundsAPI_UserID=0&ng_username=%26lt%3Bdeleted%26gt%3B' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/fnf.gif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="friday night funkin" class="buggy">Friday Night Funkin [NEW]</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://kdata1.com/5000/2025/indiecross3/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ic3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="friday night funkin" class="buggy">Friday Night Funkin Indie Cross</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/imposter&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/imposter-fnf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Imposter v4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/whitty' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/whitty.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Whitty</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/sky&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sky.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Sky</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/hex&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/hex.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Hex</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/pibby&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/pibby.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin; Pibby Apocalypse</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/miku&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/miku.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Hatsune Miku</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/shaggy&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/shaggy.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Shaggy</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/sonicexe&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sonicexe.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Friday Night Funkin Vs. Sonic EXE</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/agoti&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/agoti.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin Vs. A.G.O.T.I</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/garcello&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/garcello.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin Vs Garcello</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/holiday&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/fnfholiday.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin; The Holiday Mod</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/kapi&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/kapi.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin Vs. Kapi</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/shaggy/4key&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/shaggy.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin vs. Shaggy (4 keys)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/tricky&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tricky.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin vs. Tricky</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fnf/zardy&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/zardy.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin vs. Zardy</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://w8.snokido.com/games/html5/friday-night-funkin/tord03/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tord.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Friday Night Funkin vs. Tord</span></a>
                                <a class='link button' href='/yalp/ela.html?book=football-legends&type=local'><img
                                                height="175" src="/assets/images/game/football-legends-2021.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="soccer legends 2021">Football Legends 2021</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwzewrpMx9gWhhnciarDGlL-swUEfQwsX-eFwX_wCRpQbNis2rZKPXm1UOe0Dm-m6h2/exec'><img
                                                height="175" src="/assets/images/game/fruit-ninja.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="fruit ninja">Fruit Ninja</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://showcase.codethislab.com/games/multiplayer/four_colors/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/four_colors.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="four colors">Four Colors</span></a>
                                <a class='link button' href='/active/index.html?autofill=http://71.19.146.161/'><img
                                                height="175" src="/assets/images/game/flappy-plane.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="falppy plane">Flappy Plane</span></a>
                                <a class='link button' href='/yalp/banana.html?book=flappybird&type=local'><img
                                                height="175" src="/assets/images/game/flappy-plane.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="flappy bird">Flappy Bird</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fleeingthecomplex&type=3kh0'><img
                                                height="175" src="/assets/images/game/flee.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="FTC">Fleeing The Complex</span></a>
                                <a class='link button' href='/yalp/ela.html?book=lava&type=local'><img height="175"
                                                src="/assets/images/game/floor-is-lava.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="fil">Floor Is Lava</span></a>
                                <a class='link button' href='/yalp/ela.html?book=frying-nemo&type=3kh0'><img
                                                height="175" src="/assets/images/game/frying.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Frying Nemo</span></a>
                                <a class='link button' href='/yalp/ela.html?book=froggys-battle&type=3kh0'><img
                                                height="175" src="/assets/images/game/froggies.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Froggies Battle</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fall-guys&type=local'><img height="175"
                                                src="/assets/images/game/fall-guys.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Fall Guys Ripoff</span></a>
                                <a class='link button' href='/yalp/ela.html?book=funny-shooter-2&type=local'><img
                                                height="175" src="/assets/images/game/funny-shooter-2.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Funny Shooter 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=falling-ball&type=local'><img
                                                height="175" src="/assets/images/game/falling-ball.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Falling Ball</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxsOqAwH7n6JxN5hVJCCxwvQgs91YCVxGZrfD8rYRicLErr2gJ8zPPRHth8pfsb0C90uA/exec'><img height="175"
                                                src="/assets/images/game/fps-io.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">FPS.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=fc&type=local'><img height="175"
                                                src="/assets/images/game/ea-sports-fc-mobile-24-soccer.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Fifa Mobile</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://footballbros.io' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/football.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Football Bros</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/fears-to-fathom/home-alone/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ftfha.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:50px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Fears to fathom; Home Alone</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/MkGamesdev/MKGBA2.0/master/index.html'><img height="175"
                                                src="/assets/images/game/gba.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA">GameBoy Advanced</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://endrift.github.io/gbajs/'><img height="175"
                                                src="/assets/images/game/gba-js.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="GBA.JS">GBA.JS</span></a>
                                <a class='link button' href='/yalp/ela.html?book=geodash-lite&type=local'><img
                                                height="175" src="/assets/images/game/gd.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="Geometry Dash">Geometry Dash; Lite</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gd/meltdown&type=local'><img
                                                height="175" src="/assets/images/game/meltdown.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gdm">GD Meltdown</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gd/world&type=local'><img height="175"
                                                src="/assets/images/game/word.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Gdw">Geometry Dash World</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gd/subzero&type=local'><img
                                                height="175" src="/assets/images/game/subzero.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GDSZ">GD Subzero</span></a>
                                <a class='link button' href='/yalp/ela.html?book=getting-over-it&type=local'><img
                                                height="175" src="/assets/images/game/goi.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA.JS">Getting Over It</span></a>
                                <a class='link button' href='/yalp/ela.html?book=google-feud&type=local'><img
                                                height="175" src="/assets/images/game/gfued.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GFeud">Google Feud</span></a>
                                <a class='link button' href='/yalp/ela.html?book=google/doodle-cricket&type=local'><img
                                                height="175" src="/assets/images/game/cricket.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GDC">Google Cricket</span></a>
                                <a class='link button'
                                        href='/yalp/ela.html?book=google/doodle-champion-island&type=local'><img
                                                height="175" src="/assets/images/game/championisland.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:195px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GDCI">Google Champion Island</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://santatracker.google.com/snowbox.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/santa-tracker.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GST">Google Santa Tracker</span></a>
                                <a class='link button' href='/yalp/ela.html?book=google/doodle-baseball&type=local'><img
                                                height="175" src="/assets/images/game/baseball.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:195px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GDB">Google Doodle Baseball</span></a>
                                <a class='link button' href='/yalp/banana.html?book=snake&type=local'><img height="175"
                                                src="/assets/images/game/snake.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GS">Google Snake</span></a>
                                <a class='link button' href='/yalp/ela.html?book=granny&type=local'><img height="175"
                                                src="/assets/images/game/granny.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="granny">Granny</span></a>
                                <a class='link button' href='/yalp/ela.html?book=granny/2&type=local'><img height="175"
                                                src="/assets/images/game/granny2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="granny">Granny 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=granny/3&type=local'><img height="175"
                                                src="/assets/images/game/granny3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="granny">Granny 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gun-night&type=local'><img height="175"
                                                src="/assets/images/game/gun-night-io.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Gunnight">GunNight.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gravity-soccer&type=local'><img
                                                height="175" src="/assets/images/game/gravity.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Gravity Soccer">Gravity Soccer</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gimme-the-airpod&type=3kh0'><img
                                                height="175" src="/assets/images/game/airpod.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Gimme The Airpod</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gearsofbabies&type=3kh0'><img
                                                height="175" src="/assets/images/game/gears.ico"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Gears Of Babies</span></a>
                                <a class='link button' href='/yalp/ela.html?book=glass-city&type=3kh0'><img height="175"
                                                src="/assets/images/game/glass.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Glass City</span></a>
                                <a class='link button' href='/yalp/ela.html?book=getaway-shootout&type=local'><img
                                                height="175" src="/assets/images/game/getaway-shootout.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Getaway Shootout</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gunspin&type=local'><img height="175"
                                                src="/assets/images/game/gunspin.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Gunspin</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gun-mayhem&type=local'><img
                                                height="175" src="/assets/images/game/gm.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Gun Mayhem</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://gladihoppers-pro.github.io/file/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/gladi.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Gladihoppers</span></a><a class='link button'
                                        href='/active/index.html?autofill=https://games.poki.com/458768/e8e91bf6-6100-4c38-ab70-76349a0055bf' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/gw.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Gift Wrapped</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://bit.ly/46qBHCy'><img
                                                height="175" src="/assets/images/app/gfn.png"
                                                onerror="this.src='/assets/img/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gfn" class="buggy">Ge-Force Now</span></a>
                                <a class='link button' href='/yalp/src/genshin' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/genshinimpact.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Genshin Impact</span></a>
                                <a class='link button' href='/yalp/ela.html?book=gettothetopalthoughthereisnotop&type=local'><img
                                                height="175" src="/assets/images/game/gttt.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Get To The Top Although There Is No Top</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://slqntdevss.github.io/GTBPort/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/gtb.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Go To Bed</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwK_YDMKEccZyVOz_fpe66G4Je4VyFPdT10OdaKpM699Utzbq41n2m6OXqAzpX0oqrLTA/exec' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/gag.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Grow A Garden</span></a>
                                <a class='link button' href='/yalp/src/gacha/club' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/gachaclub.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Gacha Club</span></a>
                                <a class='link button' href='/yalp/src/gacha/life' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/gachalife.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Gacha Life</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hw&type=local'><img height="175"
                                                src="/assets/images/game/b.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Happy Wheels</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hardware-tycoon&type=3kh0'><img
                                                height="175" src="/assets/images/game/hardware.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Hardware Tycoon</span></a>
                                <a class='link button' href='/yalp/ela.html?book=helicopter&type=3kh0'><img height="175"
                                                src="/assets/images/game/heli.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Helicopter</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hextris&type=3kh0'><img height="175"
                                                src="/assets/images/game/hextris.ico"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Hextris</span></a>
                                <a class='link button' href='/yalp/ela.html?book=house-of-hazards&type=local'><img
                                                height="175" src="/assets/images/game/house-of-hazards.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hoh">House Of Hazards</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://classroom-6x.org/games/hill-climb/'><img
                                                height="175" src="/assets/images/game/hill-climbing-racing.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Hill Climbing Racing</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://hl-ecru.vercel.app/'><img height="175"
                                                src="/assets/images/game/half-life.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Half Life</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hungry-lamu&type=3kh0'><img
                                                height="175" src="/assets/images/game/hungry.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Hungry Lamu</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hole-io&type=local'><img height="175"
                                                src="/assets/images/game/holeio.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="holeio">Hole.IO</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/hotline-miami/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/hotlinemiami.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA.JS">Hotline Miami</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/web-ports/hollow-knight/refs/heads/main/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/hn.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA.JS">Hollow Knight</span></a>
                                <a class='link button' href='/yalp/ela.html?book=human-exp&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/hee.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Human Expenditure Program</span></a>
                                <a class='link button' href='/yalp/ela.html?book=hypper&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/hs.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Hypper Sandbox</span></a>
                                <a class='link button' href='/yalp/ela.html?book=iceagebaby&type=3kh0'><img height="175"
                                                src="/assets/images/game/iceage.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Ice Age Baby</span></a>
                                <a class='link button' href='/yalp/ela.html?book=iceagebaby2&type=3kh0'><img
                                                height="175" src="/assets/images/game/agebaby.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Ice Age Baby 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=iron-snout&type=local'><img
                                                height="175" src="/assets/images/game/iron-snout.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Iron Snout">Iron Snout</span></a>
                                <a class='link button' href='/yalp/ela.html?book=idle-breakout&type=3kh0'><img
                                                height="175" src="/assets/images/game/breakout.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Idle Breakout</span></a>
                                <a class='link button' href='/yalp/ela.html?book=idle-shark&type=3kh0'><img height="175"
                                                src="/assets/images/game/sharklogo.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Idle Shark</span></a>
                                <a class='link button' href='/yalp/ela.html?book=invite-the-blackbird&type=3kh0'><img
                                                height="175" src="/assets/images/game/invite.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Invite The Blackbird</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ita&type=local'><img height="175"
                                                src="/assets/images/game/ita.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Infiltrating The Airship</span></a>
                                <a class='link button' href='/yalp/ela.html?book=infcraft&type=local'><img height="175"
                                                src="/assets/images/game/infcraft.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Infinite Craft</span></a>
                                <a class='link button'
                                        href='/yalp/ela.html?book=mariohtml5-master/main.html&type=local'><img
                                                height="175" src="/assets/images/game/infmario.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tetris">Infinite Mario</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://edu.aptutorfinder.com/assets/storage/flash/idek/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/idek.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">I Don't Even Know</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://www.puzzlegame.com/games/Ice-Scream-Horror-Escape/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/icescream.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Ice Scream: Horror Escape</span></a>
                                <a class='link button' href='/yalp/ela.html?book=just-one-boss&type=3kh0'><img
                                                height="175" src="/assets/images/game/one-boss.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Just One Boss</span></a>
                                <a class='link button' href='/yalp/ela.html?book=jetpack-joyride&type=3kh0'><img
                                                height="175" src="/assets/images/game/joyride.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="jpjr">Jetpack Joyride</span></a>
                                <a class='link button' href='/yalp/ela.html?book=jfl&type=local'><img height="175"
                                                src="/assets/images/game/jfl.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="jfl">JustFall.LOL</span></a>
                                <a class='link button' href='/yalp/ela.html?book=jacksmith&type=local'><img height="175"
                                                src="/assets/images/game/jacksmith.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="roblox">JackSmith</span></a>
                                <a class='link button' href='/yalp/ela.html?book=jsab&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/jsab.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Just Shapes N' Beats</span></a>
                                <a class='link button' href='/yalp/ela.html?book=knife-master&type=3kh0'><img
                                                height="175" src="/assets/images/game/kitchen.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Knife Master</span></a>
                                <a class='link button' href='/yalp/ela.html?book=kitchen-gun-game&type=3kh0'><img
                                                height="175" src="/assets/images/game/kitchen-gun.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Kitchen Gun</span></a>
                                <a class='link button' href='/yalp/ela.html?book=krunker&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/krunker.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="krunker">Krunker</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwcSQ993I--VsMD2cc0jZmjWRYrVBnPGtgmUqSN278FCPokZfAfvraJQ4rlH2oAs-xg/exec'><img
                                                height="175" src="/assets/images/game/kick-the-buddy.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ktb">Kick The Buddy</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbz5PQilBPCJ7pnclZJ_v9eZclchYyuxpEyP1pHy5kWSq9bimjnk4IvjTjVY2tvH2edF/exec'><img height="175"
                                                src="/assets/images/game/knife-hit.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="knife hit">Knife Hit</span></a>
                                <a class='link button' href='/yalp/ela.html?book=kindergarten&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/kdgog.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Kindergarten</span></a>
                                <a class='link button' href='/yalp/ela.html?book=kindergarten/2&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/kdg.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Kindergarten 2</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://raw.githack.com/slqntdevss/Kindergarten3Port/refs/heads/main/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/kdg3.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Kindergarten 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=milkman-karlson/2d&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/mk2d.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Karlson 2d</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://kart.crispyclean.org' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/kartbros.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Kart Bros</span></a>
                                <a class='link button' href='/yalp/ela.html?book=level13&type=3kh0'><img height="175"
                                                src="/assets/images/game/lvl13.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Level 13</span></a>
                                <a class='link button' href='/yalp/banana.html?book=learn2fly.swf&type=swf'><img
                                                height="175" src="/assets/images/game/ltf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ltf">Learn 2 Fly</span></a>
                                <a class='link button' href='/yalp/banana.html?book=learn2fly2.swf&type=swf'><img
                                                height="175" src="/assets/images/game/ltf2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ltf2">Learn 2 Fly 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ltf3&type=3kh0'><img height="175"
                                                src="/assets/images/game/ltf3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ltf3">Learn 2 Fly 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ltf-idle&type=3kh0'><img height="175"
                                                src="/assets/images/game/ltf-idle.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ltf-idle">Learn 2 Fly Idle</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbyaIhOuQaEC1kX5IUvc5YTYfMBj43VR6z2tNEURNVlwY2Df3Bnzg-OVgLsXNdgQYdMiuQ/exec'><img
                                                height="175" src="/assets/images/game/light-it-up.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="LIU">Light It Up</span></a>
                                <a class='link button' href='/yalp/ela.html?book=levil-devil&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ld.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Level Devil</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://edu.aptutorfinder.com/assets/storage/emulator/psp/lbp' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/lbp.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Little Big Planet (LittleBigPlanet)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=lfg&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/lfg.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Lacey's Flash Games</span></a>
                                <a class='link button'
                                        href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbzlI0f1-ecYPbzoBR3OvE5nBH-krlom4UKH28DjIm-f4FGM3nA5g__x1N-EGVph-M46YA/exec'><img height="175"
                                                src="/assets/images/game/md.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Madalin Cars</span></a>
                                <a class='link button' href='/yalp/ela.html?book=madalin-stunt-cars-2&type=3kh0'><img
                                                height="175" src="/assets/images/game/mad-2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Madalin Stunt Cars 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=madalin-stunt-cars-3&type=3kh0'><img
                                                height="175" src="/assets/images/game/mad-3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Madalin Stunt Cars 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mari0&type=local'><img height="175"
                                                src="/assets/images/game/mari0.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Mari0">Mari0</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mario-combat&type=local'><img
                                                height="175" src="/assets/images/game/mario-combat.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mc">Mario Combat</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mc-classic&type=local'><img
                                                height="175" src="/assets/images/game/minecraft-classic.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mcc">Minecraft Classic</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://mcon.vercel.app' data-tag="exclusive"><img
                                                height="175" src="/yalp/src/eaglercraft/X/game/game.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mcc">Minecraft Java</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mx3m&type=local'><img height="175"
                                                src="/assets/images/game/motox3m.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mx3m">Moto X3M</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mx3m/2&type=local'><img height="175"
                                                src="/assets/images/game/motox3m2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mx3m2">Moto X3M 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mx3m/3&type=local'><img height="175"
                                                src="/assets/images/game/motox3m-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mx3m3">Moto X3M 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mx3m/pool-party&type=local'><img
                                                height="175" src="/assets/images/game/poolio.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mx3mpp">Moto X3M: Pool Party</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mx3m/spooky-land&type=local'><img
                                                height="175" src="/assets/images/game/motospooky.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="mx3msl">Moto X3M Spooky Land</span></a>
                                <a class='link button' href='/yalp/src/melon-playground' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/melon-pg.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="dad n me">Melon Playground</span></a>
                                <a class='link button' href='/yalp/ela.html?book=murder&type=local'><img height="175"
                                                src="/assets/images/game/murder.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Murder</span></a>
                                <a class='link button' href='/yalp/ela.html?book=its-closed&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/msic.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Make Sure It's Closed</span></a>
                                <a class='link button' href='/yalp/src/madden24' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/madden24.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Elastic Man">Madden NFL 24</span></a>
                                <a class='link button' href='/yalp/ela.html?book=MonkeyMart&type=3kh0'><img height="175"
                                                src="/assets/images/game/monkey-mart.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Monkey Mart</span></a>
                                <a class='link button' href='/yalp/ela.html?book=milkman-karlson&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/mk.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Milkman Karlson</span></a>
                                <a class='link button' href='/yalp/ela.html?book=minesweeper-plus&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/msplus.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Minesweeper Plus</span></a>
                                <a class='link button' href='/yalp/ela.html?book=mk64&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/mk64.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Mario Kart 64</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycby7GbJHyEsIp1s0_j_9sRCGYwQ4UutwyRDb1oRtIJtvZRGfmdeSGAZc_ZL6ENLRiDNiTg/exec'><img
                                                height="175" src="/assets/images/game/noob-steve-parkour.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="nsp">Noob Steve Parkour</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ninjavsevilcorp&type=3kh0'><img
                                                height="175" src="/assets/images/game/nvsec.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Ninja vs Evil Corp</span></a>
                                <a class='link button' href='/yalp/ela.html?book=nsresurgence&type=3kh0'><img
                                                height="175" src="/assets/images/game/nsr.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">NS Resurgence</span></a>
                                <a class='link button'  href='/yalp/src/nbalive' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/nbalive.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">NBA Live (Mobile)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=om-bounce&type=3kh0'><img height="175"
                                                src="/assets/images/game/om-nom.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Om Nom Bounce</span></a>
                                <a class='link button'
                                        href='/yalp/ela.html?book=out-of-ctrl/OutOfCtrl_v1_2&type=3kh0'><img
                                                height="175" src="/assets/images/game/out-of-ctrl.gif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Out Of Ctrl</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ovo&type=3kh0'><img height="175"
                                                src="/assets/images/game/ovo.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">OvO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ovo&type=local'><img height="175"
                                                src="/assets/images/game/OvO2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Angry Birds">OvO 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbwMccc783yv5Ftx2nkZ6BpHDi66OYtby8TRsYzgDufHka0zzRHHcV19NgtnFJH0ltbEvQ/exec'><img height="175"
                                                src="/assets/images/game/only-up.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="only up">Only Up!</span></a>
                                <a class='link button' href='/yalp/ela.html?book=osu&type=local'><img height="175"
                                                src="/assets/images/game/osu.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="osu">Osu!</span></a>
                                <a class='link button' href='/yalp/ela.html?book=goofy-ahh-obby&type=local'><img
                                                height="175" src="/assets/images/game/goofyobby.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Obby roblox (💀)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=omori&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/omori.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">OMORI</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pixel-gun-survival&type=3kh0'><img
                                                height="175" src="/assets/images/game/pixel-gun.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Pixel Gun Survival</span></a>
                                <a class='link button' href='/yalp/banana.html?book=portal.swf&type=swf'><img
                                                height="175" src="/assets/images/game/portaltheflashversion.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Portal: Flash Version</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/pizza&type=local'><img
                                                height="175" src="/assets/images/game/papaspizzaria.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Pizzaria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/bakeria&type=local'><img
                                                height="175" src="/assets/images/game/bakeria.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ppb">Papa's Bakeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/burgeria&type=local'><img
                                                height="175" src="/assets/images/game/papabg.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ppbg">Papa's Burgeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/cakeria&type=local'><img
                                                height="175" src="/assets/images/game/cake.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Cakeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/cheese&type=local'><img
                                                height="175" src="/assets/images/game/cheese.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="mx3mw">Papa's Cheeseria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/donuteria&type=local'><img
                                                height="175" src="/assets/images/game/donuteria.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Donuteria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/freezeria&type=local'><img
                                                height="175" src="/assets/images/game/freeze.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Freezeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/pasta&type=local'><img
                                                height="175" src="/assets/images/game/pasta.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Pastaria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/pancakeria&type=local'><img
                                                height="175" src="/assets/images/game/pancakeria.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Pancakeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/scooperia&type=local'><img
                                                height="175" src="/assets/images/game/papasscoop.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Scooperia</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/sushi&type=local'><img
                                                height="175" src="/assets/images/game/papasushi.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Sushiria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/taco-mia&type=local'><img
                                                height="175" src="/assets/images/game/papatm.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Taco Mia</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papas/wingeria&type=local'><img
                                                height="175" src="/assets/images/game/wings.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pp">Papa's Wingeria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papa-louie&type=local'><img
                                                height="175" src="/assets/images/game/papa-louie.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pl">Papa Louie</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papa-louie/2&type=local'><img
                                                height="175" src="/assets/images/game/papa-louie-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pl2">Papa Louie 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papa-louie/3&type=local'><img
                                                height="175" src="/assets/images/game/papa-louie-3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pl3">Papa Louie 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=paper-mc&type=local'><img height="175"
                                                src="/assets/images/game/paper-mc.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="paper mc">Paper Minecraft</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pvz&type=local'><img height="175"
                                                src="/assets/images/game/pvz.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pvz">Plants Vs Zombies</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pixel-shooter&type=local'><img
                                                height="175" src="/assets/images/game/pixel-shooter.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ps">Pixel Shooter</span></a>
                                <a class='link button' href='/yalp/ela.html?book=paper-io-2&type=local'><img
                                                height="175" src="/assets/images/game/paper-io2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="paper io 2">Paper.IO 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=parking-fury&type=local'><img
                                                height="175" src="/assets/images/game/parking-fury.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pf">Parking Fury</span></a>
                                <a class='link button' href='/yalp/ela.html?book=parking-fury/2&type=local'><img
                                                height="175" src="/assets/images/game/parking-fury-2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pf2">Parking Fury 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=parking-fury/3&type=local'><img
                                                height="175" src="/assets/images/game/parking-fury-3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pf3">Parking Fury 3</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://raw.githack.com/MkGamesdev/MKGBA2.0/master/launcher.html#pokemonemerald'><img
                                                height="175" src="/assets/images/game/pokemon-emerald.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pe">Pokemon Emerald</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pokemon/ruby&type=local'><img
                                                height="175" src="/assets/images/game/ruby.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pr">Pokemon Ruby</span></a>
                                <a class='link button' href='https://cooleoooo662.github.io/GBA-Emulator-Unblocked/launcher.html#pokemongreen'><img
                                                height="175" src="/assets/images/game/pokemon-leaf.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pe">Pokemon LeafGreen</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://cooleoooo662.github.io/GBA-Emulator-Unblocked/launcher.html#pokemonred'><img
                                                height="175" src="/assets/images/game/pokemon-firered.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pe">Pokemon Fire Red</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pokemon/sapphire&type=local'><img
                                                height="175" src="/assets/images/game/pokemon-sapphire.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="pe">Pokemon Sapphire</span></a>
                                <a class='link button'  href='/yalp/ela.html?book=pokemon/quetzal' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/pqm.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Pokemon Quetzal</span></a>
                                <a class='link button' href='/yalp/ela.html?book=precision-client&type=3kh0'><img
                                                height="175" src="/assets/images/game/percision.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Precision Client
                                        </span></a>
                                <a class='link button' href='/yalp/ela.html?book=push-the-square&type=3kh0'><img
                                                height="175" src="/assets/images/game/push.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Push The Square</span></a>
                                <a class='link button' href='/yalp/ela.html?book=push-your-luck&type=3kh0'><img
                                                height="175" src="/assets/images/game/luck.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Push Your Luck</span></a>
                                <a class='link button' href='/yalp/ela.html?book=popcat-classic&type=3kh0'><img
                                                height="175" src="/assets/images/game/popcat.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Popcat Classic</span></a>
                                <a class='link button' href='/yalp/ela.html?book=papyrus-fight&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/Disbelief_Papyrus.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="A Dark Room">Papyrus Disbelief</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githubusercontent.com/genizy/web-port/refs/heads/main/people-playground/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/peopleplayground.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA.JS">People Playground</span></a>
                                <a class='link button' href='/yalp/ela.html?book=pizzatower&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/pizzatower.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Pizza Tower</span></a>
                                <a class='link button' href='/yalp/ela.html?book=poker&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/poker.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">24/7 Poker</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://penaltyshooters.gitlab.io/game/penalty-shooters/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ps.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Penalty Shootout</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://penaltyshooters.gitlab.io/new-game/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ps2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Penalty Shootout 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://g.vseigru.net/7/igra-kvantovaya-geometriya-dash/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/qg.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="qg">Quantom Geometry</span></a>
                                <a class='link button'  href='/yalp/ela.html?book=quake3&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/quake3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Quake 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rabbit-samurai&type=3kh0'><img
                                                height="175" src="/assets/images/game/rabbit.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Rabbit Samurai</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rabbit-samurai2&type=3kh0'><img
                                                height="175" src="/assets/images/game/rabbit-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Rabbit Samurai 2</span></a>
                                <a class='link button' href='/yalp/src/ro-blox' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/rblx.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Roblox</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/slqntdevss/quasar/refs/heads/main/public/assets/storage/webgl/dblx/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/rblx.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Roblox [Doblox, roblox clone]</span></a>
                                <a class='link button' href='/yalp/ela.html?book=raft-wars&type=local'><img height="175"
                                                src="/assets/images/game/raft-wars.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rw">Raft Wars</span></a>
                                <a class='link button' href='/yalp/ela.html?book=raft-wars/2&type=local'><img
                                                height="175" src="/assets/images/game/raft-wars-2.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rw2">Raft Wars 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=raft&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/raft.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Raft; Survival</span></a>
                                <a class='link button' href='/yalp/ela.html?book=red-ball-4&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/red-ball-4.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rb4">Red Ball 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=red-ball-4/2&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/red-ball-4-vol2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rb4vol2">Red Ball 4 Volume 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=red-ball-4/3&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/rb3.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rb4vol3">Red Ball 4 Volume 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=retro-bowl&type=3kh0'><img height="175"
                                                src="/assets/images/game/retro-bowl.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rtbw">Retro Bowl</span></a>
                                <a class='link button' href='/yalp/ela.html?book=retrobowlcollege&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/rb-college.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="rbc">Retro Bowl College</span></a>
                                <a class='link button' href='/yalp/ela.html?book=run&type=local'><img height="175"
                                                src="/assets/images/game/run.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="run2">Run</span></a>
                                <a class='link button' href='/yalp/ela.html?book=run-2&type=local'><img height="175"
                                                src="/assets/images/game/run-2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="run2">Run 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=run3/main&type=local'><img height="175"
                                                src="/assets/images/game/run-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Run 3">Run 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=runner&type=3kh0'><img height="175"
                                                src="/assets/images/game/runner.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Run 3 Bootleg</span></a>
                                <a class='link button' href='/yalp/src/rlss' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/rocket-league-sideswipe.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="dad n me">Rocket League Sideswipe</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rooftop-snipers&type=local'><img
                                                height="175" src="/assets/images/game/rooftop-snipers.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="granny">Rooftop Snipers</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rooftop-snipers-2&type=local'><img
                                                height="175" src="/assets/images/game/rooftop-snipers-2.avif"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="granny">Rooftop Snipers 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://html5.gamedistribution.com/rvvASMiM/22216b9e61ca443aae43a20605702087/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzIyMjE2YjllNjFjYTQ0M2FhZTQzYTIwNjA1NzAyMDg3LyIsInBhcmVudERvbWFpbiI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidG9wRG9tYWluIjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/rugby.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Rugby.IO: Ball Mayhem</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rocketleague2d&type=local'><img
                                                height="175" src="/assets/images/game/rl2d.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Rocket League 2D</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://cayuganation-nsn.gov/uploads/1/0/7/9/139890129/custom_themes/732388783671352957/files/rocsd.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/rsd.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Rocket Soccer Derby</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/repo/index.html' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/repo.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="GBA.JS">REPO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=rerun&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/rerun.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">RE:RUN (rerun)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stickman-hook&type=local'><img
                                                height="175" src="/assets/images/game/stickman-hook.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Stickman Hook">Stickman Hook</span></a>
                                <a class='link button' href='/yalp/ela.html?book=santy-is-home&type=3kh0'><img
                                                height="175" src="/assets/images/game/santy-is-home.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Santy Is Home</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slime-rush-td&type=3kh0'><img
                                                height="175" src="/assets/images/game/slime-rush.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Slime Rush TD</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slope&type=3kh0'><img height="175"
                                                src="/assets/images/game/slope.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Slope">Slope</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slope-2&type=local'><img height="175"
                                                src="/assets/images/game/slope-2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Slope 2">Slope 2</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbydowo_N3nPu9WFnHbaJK2bwL-LUxdw5SMG3SbvYs8-Qni7jSjeFEo_PNtDypz0gmGd/exec'><img height="175"
                                                src="/assets/images/game/slope-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="slope-3">Slope 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slope-tunnel&type=local'><img
                                                height="175" src="/assets/images/game/slope-tunnel.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Slope Tunnel</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slither&type=local'><img height="175"
                                                src="/assets/images/game/slither.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Slither">Slither.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sort-the-court&type=3kh0'><img
                                                height="175" src="/assets/images/game/sort.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Sort The Court</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://ubg98.github.io/SaveTheDoge/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/save-doge.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Save The Doge</span></a>
                                <a class='link button' href='/yalp/ela.html?book=shell-shockers&type=local'><img
                                                height="175" src="/assets/images/game/shell-shockers.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Shell">Shell Shockers</span></a>
                                <a class='link button' href='/yalp/banana.html?book=supermario63.swf&type=swf'><img
                                                height="175" src="/assets/images/game/sm63.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SM63">Super Mario 63</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sm64&type=local'><img height="175"
                                                src="/assets/images/game/sm64.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="sm64">Super Mario 64</span></a>
                                <a class='link button' href='/yalp/ela.html?book=super-mario-run&type=local'><img
                                                height="175" src="/assets/images/game/smrun.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="smrun">Super Mario Run</span></a>
                                <a class='link button' href='/yalp/ela.html?book=snowball-io&type=local'><img
                                                height="175" src="/assets/images/game/snowball.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Snowball.IO">Snowball.IO</span></a>
                                <a class='link button' href='/yalp/ela.html?book=smash-karts&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/smash-kart.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SK">Smash Karts</span></a>
                                <a class='link button' href='/yalp/ela.html?book=snow-rider-3d&type=local'><img
                                                height="175" src="/assets/images/game/snowrider3d.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SW3D">Snow Rider 3D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ssb&type=local'><img height="175"
                                                src="/assets/images/game/ssb.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SSB">Super Smash Bros</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ssf&type=local'><img height="175"
                                                src="/assets/images/game/ssf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Stickman Hook">Super Smash Flash</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ssf/2&type=local'><img height="175"
                                                src="/assets/images/game/ssf2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Stickman Hook">Super Smash Flash 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=superhot&type=3kh0'><img height="175"
                                                src="/assets/images/game/sh.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Super Hot">SuperHot</span></a>
                                <a class='link button' href='/yalp/ela.html?book=smc&type=local'><img height="175"
                                                src="/assets/images/game/super-mario-construct.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SMC">Super Mario Construct</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbydowo_N3nPu9WFnHbaJK2bwL-LUxdw5SMG3SbvYs8-Qni7jSjeFEo_PNtDypz0gmGd/exec'><img height="175"
                                                src="/assets/images/game/smb-3.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="smb3">Super Mario Bros 3</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://kdata1.com/2022/12/super-dark-deception/?kbhgames' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/sdd.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Stickman Hook">Super Dark Deception</span></a>
                                <a class='link button' href='/yalp/ela.html?book=soccer-random&type=3kh0'><img
                                                height="175" src="/assets/images/game/soccer-random.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="sr">Soccer Random</span></a>
                                <a class='link button' href='/yalp/ela.html?book=space-company&type=3kh0'><img
                                                height="175" src="/assets/images/game/space-company.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Space Company</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stack&type=3kh0'><img height="175"
                                                src="/assets/images/game/stack.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Stack</span></a>
                                <a class='link button' href='/yalp/ela.html?book=starve&type=3kh0'><img height="175"
                                                src="/assets/images/game/starve.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Starve</span></a>
                                <a class='link button' href='/yalp/ela.html?book=station-141&type=3kh0'><img
                                                height="175" src="/assets/images/game/station-141.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Station 141</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stationmeltdown&type=3kh0'><img
                                                height="175" src="/assets/images/game/meltdown.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Station Meltdown</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stealingthediamond&type=3kh0'><img
                                                height="175" src="/assets/images/game/stealingthediamond.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Stealing The Diamond</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stick-duel-battle&type=3kh0'><img
                                                height="175" src="/assets/images/game/duel-battle.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Stick Duel Battle</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stick-archers&type=3kh0'><img
                                                height="175" src="/assets/images/game/stick-arch.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Ragdoll Archers</span></a>
                                <a class='link button' href='/yalp/ela.html?book=stick-merge&type=3kh0'><img
                                                height="175" src="/assets/images/game/stick-merge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Stick Merge</span></a>
                                <a class='link button' href='/yalp/ela.html?book=subway-surfers&type=local'><img
                                                height="175" src="/assets/images/game/subway-surfers.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Subway Surfers</span></a>
                                <a class='link button' href='/yalp/ela.html?book=subway-surfers-ny&type=3kh0'><img
                                                height="175" src="/assets/images/game/ssny.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Subway Surfers NY</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sushi-unroll&type=3kh0'><img
                                                height="175" src="/assets/images/game/sushi-unroll.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Sushi Unroll</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxLkugSSEdQm0qJQ4PZWRce6p8pKpuPdLIFeivG0cMt-QmjEjedBCarzz_kd2tlvxzs/exec' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/strongman.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Strongman Simulator</span></a>
                                <a class='link button' href='/yalp/ela.html?book=shoppingcarthero3&type=local'><img
                                                height="175" src="/assets/images/game/sch3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Shopping Cart Hero 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=lastbreath&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/ls.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="A Dark Room">Sans Last Breath</span></a>
                                <a class='link button' href='/yalp/src/stumble-guys' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/stumble-guys.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Stumble Guys</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonicrevert&type=local'><img
                                                height="175" src="/assets/images/game/sonic-revert.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="awesome">Sonic Revert</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://truffled.lol/extra/main/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sonicmania.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Sonic Mania</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonic&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sonic.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Sonic 1</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonic/2&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sonic2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Sonic 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonic/3&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sonic3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Sonic 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonic/cd&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/soniccd.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Sonic CD</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sonic/exe&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sexe.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Sonic.EXE</span></a>
                                <a class='link button' href='/yalp/ela.html?book=superfowlst&type=local'><img
                                                height="175" src="/assets/images/game/superfowlst.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="awesome">Super Fowlst</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://gnhustgames.github.io/sdip/' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/sdip.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="awesome">Seven Days In Purgatory</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://soccerskills-eurocup.gitlab.io/file/'><img height="175"
                                                src="/assets/images/game/ssec.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ssec">Soccer Skills: Euro Cup</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://superliquidsoccer.gitlab.io/file/' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/sls.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Elastic Man">Super Liquid Soccer</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://azgames.io/game/escape-road-city/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/smashyroad.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Elastic Man">Smashy Road</span></a>
                                <a class='link button' href='/yalp/ela.html?book=spiral-roll&type=local'><img
                                                height="175" src="/assets/images/game/sr.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Spiral Roll</span></a>
                                <a class='link button' href='/yalp/ela.html?book=santa-tracker&type=local'><img
                                                height="175" src="/assets/images/game/santa-tracker.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Santa Tracker</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://www.cbc.ca/kids/games/play/santas-delivery' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sd.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Santa Delivery</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://speed-starsgame.com/embed/speed-stars' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/speedstars.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">Speed Stars [Steam Version]</span></a>
                                <a class='link button' href='/yalp/ela.html?book=superfighters&type=local'><img
                                                height="175" src="/assets/images/game/superfighters.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="SM63">Super Fighters</span></a>
                                <a class='link button' href='/yalp/ela.html?book=slowroads&type=local'><img
                                                height="175" src="/assets/images/game/slowroads.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Slowroads</span></a>
                                <a class='link button' href='/yalp/ela.html?book=space-waves&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sw.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">Space Waves</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/slender/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/slender.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Slender; The Eight Pages</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbxJalyip_ETy_kolDAlSVxdcnLtn16P6gIoJ5kDwt1abHFX32SUJEOLCWU31veTffv2/exec' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sab.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Steal A Brainrot</span></a>
                                <a class='link button' href='/yalp/ela.html?book=sabo&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sabo.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Steal A Brainrot [Online]</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://bitlifeonline.github.io/stickman-dragon-fight/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sdf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Stickman Dragon Fight</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://html-classic.itch.zone/html/15249494/Production%20WebGL/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sap.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Super Auto Pets</span></a>
                                <a class='link button' href='/yalp/ela.html?book=schoolboy-runaway&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/sbra.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Schoolboy Runaway</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tattletail&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tattletail.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Tattletail</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://toughlovearena.com/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tlf.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Tough Love Arena</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tag&type=local'><img height="175"
                                                src="/assets/images/game/tag.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tt">Tag (better)</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://taggame.io/game/tag/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tagupd.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">TAG (updated)</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://script.google.com/macros/s/AKfycbyGPqP1t5TOi-CVeRFhnXRacseDqhr6eKDM4MhUmgZfrc5KDP5fPU0Moz8nvEmHGUPIoQ/exec'><img
                                                height="175" src="/assets/images/game/tanuki-sunset.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ts">Tanuki Sunset</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tank-trouble-2&type=local'><img
                                                height="175" src="/assets/images/game/tank-trouble.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tt">Tank Trouble</span></a>
                                <a class='link button' href='/yalp/ela.html?book=terreria&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/ter.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="Terreria">(SCRATCH) Terraria</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tiny-fishing&type=local'><img
                                                height="175" src="/assets/images/game/tiny-fishing.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tiny fishing">Tiny Fishing</span></a>
                                <a class='link button' href='/yalp/ela.html?book=time-shooter-3&type=local'><img
                                                height="175" src="/assets/images/game/ts3.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="ts3">Time Shooter 3</span></a>
                                <a class='link button' href='/yalp/banana.html?book=tetris&type=local'><img height="175"
                                                src="/assets/images/game/tetris.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tetris">Tetris</span></a>
                                <a class='link button' href='/yalp/banana.html?book=theimpossiblequiz.swf&type=swf'><img
                                                height="175" src="/assets/images/game/tiq.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tiq">The Impossible Quiz</span></a>
                                <a class='link button'
                                        href='/yalp/banana.html?book=theimpossiblequiz2.swf&type=swf'><img height="175"
                                                src="/assets/images/game/tiq2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tiq 2">The Impossible Quiz 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tiq-book&type=local'><img height="175"
                                                src="/assets/images/game/impossible-book.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tiq book">TIQ Book</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2017/12/impossible-xmas.swf&w=1024&h=576&warnsupport=true'><img height="175"
                                                src="/assets/images/game/tiqxmas.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">The Impossible Quizmas</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tomb-of-the-mask&type=local'><img
                                                height="175" src="/assets/images/game/tomb-of-the-mask.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="totm">Tomb Of The Mask</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tube-jumpers&type=local'><img
                                                height="175" src="/assets/images/game/tube-jumping.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="TJ">Tube Jumpers</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tunnel-rush&type=local'><img
                                                height="175" src="/assets/images/game/tnlrsh.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tr">Tunnel Rush</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://tunnelrush2.github.io' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tr2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tr2">Tunnel Rush 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tacticalassasin2&type=3kh0'><img
                                                height="175" src="/assets/images/game/tacticalassassin2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Tactical Assasin 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=temple-run-2&type=3kh0'><img
                                                height="175" src="/assets/images/game/tr2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Temple Run 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=the-final-earth&type=3kh0'><img
                                                height="175" src="/assets/images/game/the-final-earth.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">The Final Earth</span></a>
                                <a class='link button' href='/yalp/ela.html?book=the-final-earth-2&type=3kh0'><img
                                                height="175" src="/assets/images/game/the-final-earth-2.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">The Final Earth 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=the-hotel&type=3kh0'><img height="175"
                                                src="/assets/images/game/titol.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">The Hotel</span></a>
                                <a class='link button' href='/yalp/ela.html?book=thisistheonlylevel&type=3kh0'><img
                                                height="175" src="/assets/images/game/thisistheonlylevel.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">This Is The Only Level</span></a>
                                <a class='link button' href='/yalp/ela.html?book=there-is-no-game&type=3kh0'><img
                                                height="175" src="/assets/images/game/ting.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">There Is No Game</span></a>
                                <a class='link button' href='/yalp/ela.html?book=throw-rocks&type=3kh0'><img
                                                height="175" src="/assets/images/game/tras.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Throw Rocks At Sh**</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tosstheturtle&type=3kh0'><img
                                                height="175" src="/assets/images/game/tosstheturtle.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Toss The Turtle</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tv-static&type=3kh0'><img height="175"
                                                src="/assets/images/game/static.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">TV Static</span></a>
                                <a class='link button' href='/yalp/ela.html?book=traffic-run&type=local'><img
                                                height="175" src="/assets/images/game/traffic-run.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tffc run">Traffic Run</span></a>
                                <a class='link button' href='/yalp/ela.html?book=territorialio&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/territorial.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="tetris">Territorial.io</span></a>
                                <a class='link button' href='/yalp/ela.html?book=tabs&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/tabs.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="SMC">TABS (Totally Accurate Battle Simulator)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=thats-not-my-neighbor&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tnmn.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">That's Not My Neighbor</span></a>
                                <a class='link button' href='/yalp/ela.html?book=the-last-spartan&type=local'><img
                                                height="175" src="/assets/images/game/thelastspartan.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="gs">The Last Spartan</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/the-man-in-the-window/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tmftw.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">The Man From The Window</span></a>
                                <a class='link button'  href='/yalp/ela.html?book=tloz/ocrina&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/tlozoot.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">The Legend of Zelda, Ocarina of Time</span></a>
                                <a class='link button' href='/yalp/ela.html?book=ultrakill&type=local' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/ultrakill.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="1o1 basketball">ULTRAKILL</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://ajhmath.org/books/UNDERTALE/'
                                        data-tag="exclusive"><img height="175" src="/assets/images/game/undertale.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="UE">Undertale</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://kdata1.com/2022/03/undetale-enchanted/' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/undertale.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="UE">Undertale Enchanted</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/undertale-yellow/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/undertaleyellow.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="UE">Undertale Yellow</span></a>
                                <a class='link button' href='/yalp/ela.html?book=unfair-mario&type=local'><img
                                                height="175" src="/assets/images/game/unfair.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="um">Unfair Mario</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex&type=local'><img height="175"
                                                src="/assets/images/game/vex.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex">Vex</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/2&type=local'><img height="175"
                                                src="/assets/images/game/vex2.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex">Vex 2</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/3&type=local'><img height="175"
                                                src="/assets/images/game/vex-3.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex 3">Vex 3</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/4&type=local'><img height="175"
                                                src="/assets/images/game/vex-4.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex 4">Vex 4</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/5&type=local'><img height="175"
                                                src="/assets/images/game/vex-5.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex 5">Vex 5</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/6&type=local'><img height="175"
                                                src="/assets/images/game/vex-6.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex 6">Vex 6</span></a>
                                <a class='link button' href='/yalp/ela.html?book=vex/7&type=local'><img height="175"
                                                src="/assets/images/game/vex-7.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="vex 7">Vex 7</span></a>
                                <a class='link button' href='/yalp/ela.html?book=volley-random&type=3kh0'><img
                                                height="175" src="/assets/images/game/volley.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Volley Random</span></a>
                                <a class='link button'  href='/active/index.html?autofill=https://venge.io' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/venge.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Venge.IO</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://html-classic.itch.zone/html/300364/index.html?v=1542781840' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/wbwwb.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:centerwhite-space:wrap;;"
                                                alt="wbwwb">We Become What  We Behold</span></a>
                                <a class='link button' href='/yalp/ela.html?book=whack-your/ex&type=local'><img
                                                height="175" src="/assets/images/game/whack-your-x.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="wyex">Whack Your Ex</span></a>
                                <a class='link button' href='/yalp/ela.html?book=whack-your/computer&type=local'><img
                                                height="175" src="/assets/images/game/whack-your-pc.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="wyc">Whack Your Computer</span></a>
                                <a class='link button' href='/yalp/ela.html?book=whack-your/boss&type=local'><img
                                                height="175" src="/assets/images/game/whack-your-boss.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="wyboss">Whack Your Boss</span></a>
                                <a class='link button' href='/yalp/ela.html?book=webgl-fluid-simulation&type=3kh0'><img
                                                height="175" src="/assets/images/game/webgl.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="hcr">WebGL Fluid</span></a>
                                <a class='link button' href='/yalp/ela.html?book=webretro&type=3kh0'><img height="175"
                                                src="/assets/images/game/webretro.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Web Retro</span></a>
                                <a class='link button' href='/yalp/ela.html?book=win-the-whitehouse&type=3kh0'><img
                                                height="175" src="/assets/images/game/whitehouse.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Win The Whitehouse</span></a>
                                <a class='link button' href='/yalp/ela.html?book=wolf2d&type=3kh0'><img height="175"
                                                src="/assets/images/game/2d.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Wolfenstien 2D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=wolf3d&type=3kh0'><img height="175"
                                                src="/assets/images/game/wolf3d.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Wolfenstien 3D</span></a>
                                <a class='link button' href='/yalp/ela.html?book=worlds-hardest-game&type=3kh0'><img
                                                height="175" src="/assets/images/game/hardest.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="hcr">Worlds Hardest Game</span></a>
                                <a class='link button' href='/yalp/ela.html?book=worlds-hardest-game-2&type=3kh0'><img
                                                height="175" src="/assets/images/game/hardest2.jpg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Worlds Hardest Game 2</span></a>
                                <a class='link button'
                                        href='/yalp/ela.html?book=wounded-summer-baby-edition&type=3kh0'><img
                                                height="175" src="/assets/images/game/wounded.ico"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Wounded Summer</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://uploads.ungrounded.net/alternate/5718000/5718771_alternate_264276_r21.zip/?NewgroundsAPI_PublisherID=1&NewgroundsAPI_SandboxID=66a1c614e42ab&NewgroundsAPI_SessionID=&NewgroundsAPI_UserName=%26lt%3Bdeleted%26gt%3B&NewgroundsAPI_UserID=0&ng_username=%26lt%3Bdeleted%26gt%3B' data-tag="exclusive"><img height="175"
                                                src="/assets/images/game/wop.webp"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">WOP (kdot vs drake)</span></a>
                                <a class='link button' href='/yalp/ela.html?book=web-fishing&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/webfishing.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Web Fishing</span></a>
                                <a class='link button' href='/yalp/ela.html?book=wrestle-bros&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/wrestling.jpeg"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="au">Wrestle Bros</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://games.construct.net/4061/latest'><img
                                                height="175" src="/assets/images/game/wb.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Wheelie Bike</span></a>
                                <a class='link button' href='/yalp/ela.html?book=x-trial-racing&type=3kh0'><img
                                                height="175" src="/assets/images/game/xtrial.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">X Trial Racing</span></a>
                                <a class='link button' href='/yalp/banana.html?book=xx142-b2exe&type=local'><img
                                                height="175" src="/assets/images/game/xx142-b2exe.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="xx142b2exe">xx142-b2exe</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://yohoho.io'><img height="175"
                                                src="/assets/images/game/yohoho.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;;"
                                                alt="yhh.io">YoHoHo.IO</span></a>
                                <a class='link button' href='/active/index.html?autofill=https://raw.githack.com/genizy/web-port/refs/heads/main/yume-nikki/index.html' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/yk.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Yume Nikki</span></a>
                                <a class='link button' href='/yalp/ela.html?book=yandere&type=local' data-tag="exclusive"><img
                                                height="175" src="/assets/images/game/yandere.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="">Yandere Simulator</span></a>
                                <a class='link button' href='/yalp/ela.html?book=yoshifabrication&type=3kh0'><img
                                                height="175" src="/assets/images/game/yfs.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">Yoshi Fabrication</span></a>
                                <a class='link button' href='/yalp/ela.html?book=you-are-bezos&type=3kh0'><img
                                                height="175" src="/assets/images/game/you-are-bezos.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr">You Are Bezos</span></a>
                                <a class='link button' href='/yalp/ela.html?book=zombs-royale&type=3kh0'><img
                                                height="175" src="/assets/images/game/zombs.png"
                                                onerror="this.src='/assets/images/no-icon-found.png'" class="image"
                                                width="175"><span class="span"
                                                style="padding:15px;margin:auto;display:block;width:170px;height:45px;line-height:25px;overflow:hidden;text-align:center;white-space:wrap;"
                                                alt="hcr" class="buggy">Zombs Royale</span></a>
`;

const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, "text/html");
const elements = doc.body.children;

const box = document.querySelector(".box");
[...elements].forEach(el => box.appendChild(el));

function filterActivites() {
        const input = document.getElementById("searchInput").value.toUpperCase();
        const activity = document.querySelectorAll(".box .link");

        activity.forEach(game => {
                const isExclusive = game.dataset.tag === "exclusive";
                const matches = game.innerText.toUpperCase().includes(input);
                const show = (currentMode === "all" && matches) || (currentMode === "exclusive" && isExclusive && matches);
                game.style.display = show ? "" : "none";
        });
}

function showActivites() {
        currentMode = "all";
        filterActivites();
}

function showExclusives() {
        currentMode = "exclusive";
        filterActivites();
}

function randomActivity() {
        const gameLinks = document.querySelectorAll('.box .link:not([href*="dsc.gg"])');

        let availableLinks;
        if (currentMode === "exclusive") {
                availableLinks = Array.from(gameLinks).filter(link => link.dataset.tag === "exclusive");
        } else {
                availableLinks = Array.from(gameLinks);
        }

        const searchInput = document.getElementById("searchInput").value.trim();
        if (searchInput) {
                availableLinks = availableLinks.filter(link => link.style.display !== "none");
        }

        if (availableLinks.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableLinks.length);
                const randomLink = availableLinks[randomIndex];
                const url = randomLink.getAttribute('href');

                window.location.href = url;
        } else {
                alert("No games available to select!");
        }
}

document.getElementById("searchInput").addEventListener("input", filterActivites);
filterActivites();
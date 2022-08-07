<script lang="ts">
import Command from '../../command.svelte';
import SiTypescript from "svelte-icons-pack/si/SiTypescript";
import SiNextdotjs from "svelte-icons-pack/si/SiNextdotjs";
import SiSvelte from "svelte-icons-pack/si/SiSvelte";
import FaBrandsNode from "svelte-icons-pack/fa/FaBrandsNode";
import SiStimulus from "svelte-icons-pack/si/SiStimulus";
import SiRubyonrails from "svelte-icons-pack/si/SiRubyonrails";
import SiPostgresql from "svelte-icons-pack/si/SiPostgresql";
import SiRust from "svelte-icons-pack/si/SiRust";
import BiLogoNodejs from "svelte-icons-pack/bi/BiLogoNodejs";
import SiElixir from "svelte-icons-pack/si/SiElixir";
import SiApachekafka from "svelte-icons-pack/si/SiApachekafka";
import RiDocumentBook2Fill from "svelte-icons-pack/ri/RiDocumentBook2Fill";

import TechItem from './techItem.svelte';

export let name: string;

</script>

<style lang="scss">
    .about {
        &-title {
            color: var(--clr-terminal-cyan);
            text-align: center;
            width: 100%;
        }

        &-body {
            margin-inline: 2rem;
            color: var(--clr-terminal-blue);
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .tech-i-like {

                .tech-heading {
                    font-size: large;
                    color: var(--clr-terminal-magenta);
                    margin-block: 0.5rem;
                }

                .tech-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 0.5rem;
                    color: var(--clr-terminal-white);
                }

                .book-list {
                    display: flex;
                    flex-direction: column;
                    color: var(--clr-terminal-white);
                }
            }
        }
    }
</style>

<Command name={name} valid>
   <div class="about-title">
    <pre>
.----------------. .----------------. .----------------. .-----------------.
| .--------------. | .--------------. | .--------------. | .--------------. |
| |     _____    | | | ____    ____ | | |      __      | | | ____  _____  | |
| |    |_   _|   | | ||_   \  /   _|| | |     /  \     | | ||_   \|_   _| | |
| |      | |     | | |  |   \/   |  | | |    / /\ \    | | |  |   \ | |   | |
| |      | |     | | |  | |\  /| |  | | |   / ____ \   | | |  | |\ \| |   | |
| |     _| |_    | | | _| |_\/_| |_ | | | _/ /    \ \_ | | | _| |_\   |_  | |
| |    |_____|   | | ||_____||_____|| | ||____|  |____|| | ||_____|\____| | |
| |              | | |              | | |              | | |              | |
| '--------------' | '--------------' | '--------------' | '--------------' |
'----------------' '----------------' '----------------' '----------------'
    </pre>
   </div>
   <div class="about-body">
    <span>I'm a computer scientist and an engineer. I enjoy algorithmic design and challanging my css skills.</span>
    <div class="tech-i-like">
        <div class="tech-heading">Tech I love working with</div>
        <div class="tech-list">
            <TechItem icon={SiTypescript} name="TypeScript" />
            <TechItem icon={SiNextdotjs} name="Nextjs" />
            <TechItem icon={SiSvelte} name="Svelte" />
            <TechItem icon={FaBrandsNode} name="Node" />
            <TechItem icon={SiStimulus} name="Stimulus" />
            <TechItem icon={SiRubyonrails} name="Ruby on rails" />
            <TechItem icon={SiPostgresql} name="SQL" />
        </div>
        <div class="tech-heading">Tech I want to work with</div>
        <div class="tech-list">
            <TechItem icon={SiRust} name="Rust" />
            <TechItem icon={BiLogoNodejs} name="Bun" />
            <TechItem icon={SiElixir} name="Elixir" />
            <TechItem icon={SiApachekafka} name="Kafka" />
        </div>
        <div class="tech-heading">Tech I have worked with in the past</div>
        <div class="tech-list">
            <span>C++</span>
            <span>C</span>
            <span>Microprocessors</span>
            <span>ML and DL</span>
            <span>Python</span>
            <span>Matlab</span>
            <span>PHP</span>
            <span>Julia</span>
            <span>.NET</span>
            <span>Java</span>
        </div>
        <div class="tech-heading">Books I love and recommend</div>
        <div class="book-list">
            <TechItem icon={RiDocumentBook2Fill} name="Elements of statistical learning" />
            <TechItem icon={RiDocumentBook2Fill} name="The art of Computer Programming" />
            <TechItem icon={RiDocumentBook2Fill} name="Introduction to alogrithms by Thomas H. Cormen" />
            <TechItem icon={RiDocumentBook2Fill} name="Patterns of Enterprise Application Architecture" />

        </div>
    </div>
   </div>

</Command>
/*------------------Stories to jsx--------------------*/
export default function StoriesToJSX(){
const stories = [{image:<img src="assets/img/9gag.svg" />,user:'9gag'},
{image:<img src="assets/img/meowed.svg" />,user:' meowed'},
{image:<img src="assets/img/barked.svg" />,user:'barked'},
{image:<img src="assets/img/nathanwpylestrangeplanet.svg" />,user:'nathanwpylestrangeplanet'},
{image:<img src="assets/img/wawawicomics.svg" />,user:'nwawawicomics'},
{image:<img src="assets/img/respondeai.svg" />,user:'respondeai'},
{image:<img src="assets/img/filomoderna.svg" />,user:'filomoderna'},
{image:<img src="assets/img/memeriagourmet.svg" />,user:'memeriagourmet'},]

const storiesJSX = stories.map((item) =>{

return (
<div class="story">
<div class="imagem">
{item.image}
</div>

<div class="usuario">
{item.user}
</div>
</div>
)
})

return storiesJSX

}



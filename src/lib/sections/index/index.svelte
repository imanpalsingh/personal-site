<script>
  import Banner from "./banner.svelte"
</script>

<style type="text/scss">

  .container{
    display: flex;
    place-items: center;
    place-content: center;
    position: relative;
  }

  .heading-wrapper{
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 10rem;
    width: 100%;
    justify-content: space-around;
  }

  .heading{
    font-family: var(--ff-primary-400);
    font-size: 16vw;
    font-weight: 100;
    background: -webkit-gradient(linear, left bottom, right top, from(var(--clr-text)), to(var(--clr-primary-800)));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease infinite;
    background-size: 400% 400%;

    @media only screen and (min-width: 2048px){
      font-size: 20rem;
    }

  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

</style>

<div class="container">
  <div class="heading-wrapper">
    <div class="heading">Algorithmist</div>
  </div>
   <Banner />
</div>

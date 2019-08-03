$(() => {
  const addTeam = () => {
    const $baseballContainer = $('.baseballContainer')
    const $footballContainer = $('.footballContainer')
    const $footballTeam = $('.footballTeam')
    const $baseballTeam = $('.baseballTeam')
    console.log($baseballContainer);
    $baseballContainer.append($baseballTeam)
    $footballContainer.append($footballTeam)
  }

addTeam();

})

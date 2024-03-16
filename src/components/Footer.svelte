<footer class="footer p-10 bg-neutral text-neutral-content">
  <div class="container flex flex-col md:flex-row md:justify-between">
    <div class="px-6 flex-col">
      <a href="/">
        <h2 class="text-neutral-content text-2xl font-bold mb-4">Gus's Barbell Club</h2>
      </a>
      <blockquote class="mb-6">
        <span class="block">Strong people are harder to kill than weak people, and more useful in general.</span>
        <cite class="block">- Mark Rippetoe</cite>
      </blockquote>
      <blockquote class="max-w-prose pr-6">
        <span class="block">No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.</span>
        <cite class="block">- Socrates</cite>
      </blockquote>
    </div>
    <div class="flex flex-col text-2xl px-6 py-6 md:py-0">
      <p class="font-bold mb-4">Call or Text to Start Training</p>
      <p><a href="tel:5024723042" class="btn btn-secondary">(502) 472-3042</a></p>

      <div class="my-8" id="payment">
        <h2 class="font-bold mb-4">Pay for a Session</h2>
        <div class="hidden md:block">
          <script async
            src="https://js.stripe.com/v3/buy-button.js">
          </script>
    
          <stripe-buy-button
            buy-button-id="buy_btn_1OuytDKqLqCcN0PduX8bfJMs"
            publishable-key="pk_live_51NUYkdKqLqCcN0PdyKbbZRGwg2sTu3QxH23SZrfhswEdUjFVXAvBuPjhUkfkeUH6piXmTkSCDOdQWX9lj95WR6Ku00mwHM66LJ"
          >
          </stripe-buy-button>
        </div>
        <div class="md:hidden">
          <a href="https://buy.stripe.com/bIYbLEg3UeOLaLC145" class="btn btn=primary">Checkout with Stripe</a>
        </div>
      </div>
    </div>
  </div>
</footer>
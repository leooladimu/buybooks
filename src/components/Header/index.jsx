import { Link } from "wouter";

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">FAQs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/register">Sign in</Link>
      </div>
    </nav>
  </header>
);
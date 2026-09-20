<template>
  <footer class="footer">
    <!-- Main Footer -->
    <div class="footer-container">
      <div class="footer-grid">
        <!-- About -->
        <div class="footer-about">
          <div class="footer-logo">
            <div class="logo-icon">OT</div>
            <span>Observatoire du Territoire</span>
          </div>
          <p>
            Observatoire du Territoire est un outil de promotion de la bonne gouvernance territoriale à Madagascar, facilitant l'accès à l'information et la transparence de la gestion locale.
          </p>
          <div class="social-links">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h3>Raccourcis</h3>
          <ul>
            <li><a href="#">Qui sommes nous</a></li>
            <li><a href="#">Nos indicateurs</a></li>
            <li><a href="#">Organisation</a></li>
            <li><a href="#">Nos missions</a></li>
            <li><a href="#">Ressources</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-contact">
          <h3>Nous Contacter</h3>
          <ul>
            <li>
              <MapPin class="icon" />
              <span>Antananarivo, Madagascar<br />BP 1234</span>
            </li>
            <li>
              <Phone class="icon" />
              <span>+261 20 XX XXX XX</span>
            </li>
            <li>
              <Mail class="icon" />
              <span>contact@observatoire.mg</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Abonnez-vous pour recevoir nos actualités et rapports</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button>S'abonner</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <p>© 2025 Observatoire du Territoire. Tous droits réservés.</p>
        <div class="footer-bottom-links">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Mentions légales</a>
          <a href="#">CGU</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-vue-next";
  export default {
    name: 'foot'
  }
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111827;
  color: #d1d5db;
  font-size: 0.9rem;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .footer-grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  /* About section */
  .footer-about {
    p {
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;

      .logo-icon {
        background: linear-gradient(135deg, #059669, #047857);
        width: 40px;
        height: 40px;
        color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
      }

      span {
        color: #fff;
        font-weight: 500;
      }
    }

    .social-links {
      display: flex;
      gap: 0.75rem;

      a {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background-color: #1f2937;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;

        svg {
          width: 16px;
          height: 16px;
          color: #fff;
        }

        &:hover {
          background-color: #059669;
        }
      }
    }
  }

  /* Links section */
  .footer-links {
    h3 {
      color: #fff;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.75rem;

        a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #34d399;
          }
        }
      }
    }
  }

  /* Contact */
  .footer-contact {
    h3 {
      color: #fff;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;

        .icon {
          color: #10b981;
          flex-shrink: 0;
        }

        span {
          color: #d1d5db;
        }
      }
    }
  }

  /* Newsletter */
  .footer-newsletter {
    h3 {
      color: #fff;
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 1rem;
    }

    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      input {
        background-color: #1f2937;
        border: 1px solid #374151;
        color: #fff;
        padding: 0.5rem;
        border-radius: 8px;

        &::placeholder {
          color: #6b7280;
        }
      }

      button {
        background: linear-gradient(90deg, #059669, #047857);
        border: none;
        color: #fff;
        padding: 0.6rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: linear-gradient(90deg, #047857, #065f46);
        }
      }
    }
  }

  /* Bottom Bar */
  .footer-bottom {
    border-top: 1px solid #1f2937;
    margin-top: 2rem;

    .footer-bottom-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      p {
        color: #9ca3af;
      }

      .footer-bottom-links {
        display: flex;
        gap: 1.5rem;

        a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #34d399;
          }
        }
      }
    }
  }
}
</style>

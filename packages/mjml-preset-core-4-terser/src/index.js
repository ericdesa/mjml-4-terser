import { Social, SocialElement } from 'mjml-social-4-terser'
import { Navbar, NavbarLink } from 'mjml-navbar-4-terser'
import { Carousel, CarouselImage } from 'mjml-carousel-4-terser'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion-4-terser'
import Body from 'mjml-body-4-terser'
import Head from 'mjml-head-4-terser'
import HeadAttributes from 'mjml-head-attributes-4-terser'
import HeadBreakpoint from 'mjml-head-breakpoint-4-terser'
import HeadHtmlAttributes from 'mjml-head-html-attributes-4-terser'
import HeadFont from 'mjml-head-font-4-terser'
import HeadPreview from 'mjml-head-preview-4-terser'
import HeadStyle from 'mjml-head-style-4-terser'
import HeadTitle from 'mjml-head-title-4-terser'
import Hero from 'mjml-hero-4-terser'
import Button from 'mjml-button-4-terser'
import Column from 'mjml-column-4-terser'
import Divider from 'mjml-divider-4-terser'
import Group from 'mjml-group-4-terser'
import Image from 'mjml-image-4-terser'
import Raw from 'mjml-raw-4-terser'
import Section from 'mjml-section-4-terser'
import Spacer from 'mjml-spacer-4-terser'
import Text from 'mjml-text-4-terser'
import Table from 'mjml-table-4-terser'
import Wrapper from 'mjml-wrapper-4-terser'
import dependencies from './dependencies'

const components = [
  Body,
  Head,
  HeadAttributes,
  HeadBreakpoint,
  HeadHtmlAttributes,
  HeadFont,
  HeadPreview,
  HeadStyle,
  HeadTitle,
  Hero,
  Button,
  Column,
  Divider,
  Group,
  Image,

  Raw,
  Section,
  Spacer,
  Text,
  Table,
  Wrapper,

  Social,
  SocialElement,
  Navbar,
  NavbarLink,
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
  Carousel,
  CarouselImage,
]

const presetCore = {
  components,
  dependencies,
}

export default presetCore

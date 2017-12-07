package com.example.springbootwithreactjs.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 */
@RestController
public class PongController {

  @RequestMapping(value = "/pong", method = RequestMethod.GET)
  public String pong() {
    return "pong";
  }
}
